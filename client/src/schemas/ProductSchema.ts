import * as yup from 'yup'

export const productSchema = yup.object().shape({
  title: yup
    .string()
    .required('* This field is required')
    .min(3, '* Min 3 character'),
  description: yup
    .string()
    .required('* This field is required')
    .min(10, '*Min 10 character'),
  price: yup
    .number()
    .required('* This field is required')
    .moreThan(0, 'price should not be zero'),
  image: yup.string().required('* This field is required'),
})
