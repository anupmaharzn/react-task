import { object, string, number, TypeOf, any } from 'zod'

const payload = {
    body: object({
        title: string({
            required_error: 'title is required',
        }),
        description: string({
            required_error: 'description is required',
        }).min(10, 'Description should be 10 char long'),
        price: string({
            required_error: 'price is required',
        }),
        image: any({
            required_error: 'image is required',
        }),
    }),
}

const params = {
    params: object({
        productId: string({
            required_error: 'productId is required',
        }),
    }),
}

export const createProductSchema = object({
    ...payload,
})

export const updateProductSchema = object({
    ...payload,
    ...params,
})

export const deleteProductSchema = object({
    ...params,
})

export const getProductSchema = object({
    ...params,
})

export type createProductInput = TypeOf<typeof createProductSchema>
export type updateProductInput = TypeOf<typeof updateProductSchema>
export type ReadProductInput = TypeOf<typeof getProductSchema>
export type DeleteProductInput = TypeOf<typeof deleteProductSchema>
