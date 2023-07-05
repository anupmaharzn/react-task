import mongoose from "mongoose";

import { UserDocumentType } from "./user.model";

export interface sessionDocumentType extends mongoose.Document {
  user: UserDocumentType["_id"];
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}

//user schema
const sessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    valid: {
      type: Boolean,
      default: true,
    },
    userAgent: {
      type: String,
    },
  },
  { timestamps: true }
);

//user model
const SessionModel = mongoose.model<sessionDocumentType>(
  "Session",
  sessionSchema
);

export default SessionModel;
