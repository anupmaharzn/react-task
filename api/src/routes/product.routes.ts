import validateResource from '../middleware/validateResource'
import requireUser from '../middleware/requireUser'
import {
    createProductSchema,
    deleteProductSchema,
    getProductSchema,
    updateProductSchema,
} from '../schema/product.schema'
import {
    createProductHandler,
    deleteProductHandler,
    getProductHandler,
    updateProductHandler,
    getAllProductHandler,
} from '../controller/product.controller'
import { Router } from 'express'
import { upload } from '../middleware/fileupload'
const route = Router()

route.post(
    '/api/products',
    [requireUser, upload, validateResource(createProductSchema)],
    createProductHandler
)
route.put(
    '/api/products/:productId',
    [requireUser,upload, validateResource(updateProductSchema)],
    updateProductHandler
)
route.get(
    '/api/products/:productId',
    [validateResource(getProductSchema)],
    getProductHandler
)
route.get('/api/products', getAllProductHandler)
route.delete(
    '/api/products/:productId',
    [requireUser, validateResource(deleteProductSchema)],
    deleteProductHandler
)

export default route
