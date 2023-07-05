import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema } from '../../../schemas/AuthSchema'
import { TLogin } from '../types'
import { useNavigate } from 'react-router-dom'
import { login as loginService } from './service'
import { useAppDispatch, useAppSelector } from '../../../redux/store'

const index = () => {
  const dispatch = useAppDispatch()
  const { error: loginError, data } = useAppSelector((state) => state.login)
  console.log(data)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(LoginSchema),
  })
  async function handleLogin(data: TLogin) {
    dispatch(loginService(data)).then(() => {
      navigate('/', { replace: true })
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="email" {...register('email')} />
          {errors.email && <p className="error">{errors.email?.message}</p>}
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="password"
            {...register('password')}
          />
          {errors.password && (
            <p className="error">{errors.password?.message}</p>
          )}
        </div>
        <div>
          <button type="submit">login</button>
        </div>
      </form>
      {loginError && loginError}
    </div>
  )
}

export default index
