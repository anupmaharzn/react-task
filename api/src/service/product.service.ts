import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose'
import ProductModel, { productDocumentType } from '../models/product.model'
import { productInputType } from '../models/product.model'
export async function createProduct(input: productInputType) {
    return ProductModel.create(input)
}
export async function findProduct(
    query: FilterQuery<productDocumentType>,
    options: QueryOptions = { lean: true }
) {
    return ProductModel.findOne(query, {}, options)
}
export async function findAllProduct() {
    return ProductModel.find({})
}
export async function findAndUpdateProduct(
    query: FilterQuery<productDocumentType>,
    update: UpdateQuery<productDocumentType>,
    options: QueryOptions
) {
    return ProductModel.findOneAndUpdate(query, update, options)
}

export async function deleteProduct(query: FilterQuery<productDocumentType>) {
    return ProductModel.deleteOne(query)
}
