import React from 'react'
import './styles.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterSchema } from '../../../schemas/AuthSchema'
import { TRegister } from '../types'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { register as registerService } from './service'
const index: React.FC = () => {
  const { error: registerError } = useAppSelector((state) => state.register)

  const dispatch = useAppDispatch()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TRegister>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    resolver: yupResolver(RegisterSchema),
  })

  async function handleForm(data: TRegister) {
    dispatch(registerService(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="username" {...register('name')} />
          {errors.name && <p className="error">{errors.name?.message}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" {...register('email')} />
          {errors.email && <p className="error">{errors.email?.message}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            autoComplete="on"
            {...register('password')}
          />
          {errors.password && (
            <p className="error">{errors.password?.message}</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="confirm Password">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            autoComplete="on"
            {...register('passwordConfirm')}
          />
          {errors.passwordConfirm && (
            <p className="error">{errors.passwordConfirm?.message}</p>
          )}
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      {registerError && registerError}
    </div>
  )
}

export default index
