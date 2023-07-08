import * as yup from 'yup'
import { productSchema } from '../../../schemas/ProductSchema'

export type TProduct = yup.InferType<typeof productSchema>

export type TProductInitalState = {
  loading: boolean
  success: boolean
  error?: null | string
  data?: any
}
