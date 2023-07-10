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

export async function createProductHandler(
    req: Request<{}, {}, createProductInput['body']>,
    res: Response
) {
    const userId = res.locals.user._id
    const image = req.file?.path as string
    const body = { ...req.body, image }
    const product = await createProduct({ ...body, user: userId })
    return res.status(201).send({
        message: 'Product created',
        error: false,
        status: 201,
        data: product,
    })
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
        return res.status(404).send({
            message: 'Not Found',
            error: true,
            status: 404,
            data: null,
        })
    }
    // since we are assuming  as admin->not needed comment it out
    // if (String(product.user) !== userId) {
    //     return res.status(403).send({
    //         message: 'Forbidden',
    //         error: true,
    //         status: 403,
    //         data: null,
    //     })
    // }
    const updatedProduct = await findAndUpdateProduct({ productId }, update, {
        new: true,
    })
    return res.status(200).send({
        message: 'update Sucessfully',
        error: false,
        status: 200,
        data: updatedProduct,
    })
}

export async function getProductHandler(
    req: Request<ReadProductInput['params']>,
    res: Response
) {
    const productId = req.params.productId
    const product = await findProduct({ productId })
    if (!product) {
        return res.status(404).send({
            message: 'Not Found',
            error: true,
            status: 404,
            data: null,
        })
    }
    return res.status(200).send({
        message: 'product',
        error: false,
        status: 200,
        data: product,
    })
}
export async function getAllProductHandler({}, res: Response) {
    const product = await findAllProduct()
    if (!product) {
        return res.status(404).send({
            message: 'Not Found',
            error: true,
            status: 404,
            data: null,
        })
    }
    return res.status(200).send({
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
        return res.status(404).send({
            message: 'Not Found',
            error: true,
            status: 404,
            data: null,
        })
    }
    // since we are assuming as admin->not needed comment it out
    // if (String(product.user) !== userId) {
    //     return res.status(403).send({
    //         message: 'Forbidden',
    //         error: true,
    //         status: 403,
    //         data: null,
    //     })
    // }
    await deleteProduct({ productId })
    return res.status(200).send({
        message: 'Delete Sucessfully',
        error: false,
        status: 200,
        data: product,
    })
}
