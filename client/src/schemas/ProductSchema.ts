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
  price: yup.number().required('* This field is required'),
  image: yup.mixed().test('required', 'You need to provide a file', (file) => {
    if (file) return true
    return false
  }),
})
