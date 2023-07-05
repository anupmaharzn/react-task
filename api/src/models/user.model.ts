import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserInputType {
  email: string;
  name: string;
  picture?: string;
  password: string;
}

export interface UserDocumentType extends UserInputType, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<Boolean>;
}

//user schema
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    name: {
      type: String,
      require: true,
    },
    picture: {
      type: String,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  let user = this as UserDocumentType;
  if (!user.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(config.get("saltWorkFactor"));
  const hash = await bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next();
});
// simply comparePassword utilty function
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const user = this as UserDocumentType;

  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

//user model
const UserModel = mongoose.model<UserDocumentType>("User", userSchema);

export default UserModel;
