import * as yup from 'yup'
import { RegisterSchema, LoginSchema } from '../../schemas/AuthSchema'

export type TRegister = yup.InferType<typeof RegisterSchema>
export type TLogin = yup.InferType<typeof LoginSchema>

export type TRegisterInitialState = {
  loading: boolean
  success: boolean
  error?: null | string
  data?: any
}
export type TLoginInitialState = {
  loading: boolean
  success: boolean
  error?: null | string
  data?: any
}
