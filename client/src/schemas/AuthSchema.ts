import * as yup from 'yup'

export const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('* This field is required')
    .min(3, '* Min 3 character'),
  email: yup
    .string()
    .trim()
    .required('* This field is required')
    .email('* Invalid Email Address'),
  password: yup
    .string()
    .trim()
    .required('* This field is required')
    .min(8, '* Min 8 Character Long ')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      '* Password must have at least one Uppercase, one Lowercase, one Number and one Special Case Character'
    ),
  passwordConfirm: yup
    .string()
    .required('* Please retype your password')
    .oneOf([yup.ref('password')], '* Password do not match'),
})

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required('* This field is required')
    .email('* Invalid Email Address'),
  password: yup
    .string()
    .trim()
    .required('* This field is required')
    .min(8, '* Min 8 Character Long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      '* Password must have at least one Uppercase, one Lowercase, one Number and one Special Case Character'
    ),
})
