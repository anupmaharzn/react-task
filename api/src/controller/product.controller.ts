import { Request, Response } from 'express'
import {
    DeleteProductInput,
    ReadProductInput,
    createProductInput,
    updateProductInput,
} from '../schema/product.schema'
import {
    createProduct,
    deleteProduct,
    findAndUpdateProduct,
    findProduct,
    findAllProduct,
} from '../service/product.service'
import log from '../utils/logger'
export async function createProductHandler(
    req: Request<{}, {}, createProductInput['body']>,
    res: Response
) {
    const userId = res.locals.user._id
    const image = req.file?.path as string
    const body = { ...req.body, image }
    const product = await createProduct({ ...body, user: userId })
    return res.send(product)
}

export async function updateProductHandler(
    req: Request<updateProductInput['params'], {}, updateProductInput['body']>,
    res: Response
) {
    const userId = res.locals.user._id

    const productId = req.params.productId
    const image = req.file?.path as string
    const update = { ...req.body, image }
    const product = await findProduct({ productId })
    if (!product) {
        return res.sendStatus(404)
    }
    if (String(product.user) !== userId) {
        return res.sendStatus(403)
    }
    const updatedProduct = await findAndUpdateProduct({ productId }, update, {
        new: true,
    })
    return res.send(updatedProduct)
}

export async function getProductHandler(
    req: Request<ReadProductInput['params']>,
    res: Response
) {
    const productId = req.params.productId
    const product = await findProduct({ productId })
    if (!product) {
        return res.sendStatus(404)
    }
    return res.send(product)
}
export async function getAllProductHandler({}, res: Response) {
    const product = await findAllProduct()
    if (!product) {
        return res.sendStatus(404).send({
            message: 'Fail',
            error: true,
            status: 404,
            data: null,
        })
    }
    return res.send({
        message: 'success',
        error: false,
        status: 200,
        data: product,
    })
}

export async function deleteProductHandler(
    req: Request<DeleteProductInput['params']>,
    res: Response
) {
    const userId = res.locals.user._id

    const productId = req.params.productId

    const product = await findProduct({ productId })
    if (!product) {
        return res.sendStatus(404)
    }
    if (String(product.user) !== userId) {
        return res.sendStatus(403)
    }
    await deleteProduct({ productId })
    return res.sendStatus(200)
}
