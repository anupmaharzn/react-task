import mongoose from "mongoose";
import { UserDocumentType } from "./user.model";
import * as nanoid from "nanoid";
const nanoId = nanoid.customAlphabet(
  "abcdefghijklmnopqrstuvwxyz0123456789",
  10
);

export interface productInputType {
  user: UserDocumentType["_id"];
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface productDocumentType
  extends productInputType,
    mongoose.Document {
  productId: string;
  createdAt: Date;
  updatedAt: Date;
}

//user schema
const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      require: true,
      unique: true,
      default: () => `product_${nanoId()}`,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

//product Model
const ProductModel = mongoose.model<productDocumentType>(
  "Product",
  productSchema
);

export default ProductModel;
