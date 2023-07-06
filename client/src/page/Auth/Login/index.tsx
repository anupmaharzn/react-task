import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema } from '../../../schemas/AuthSchema'
import { TLogin } from '../types'
import Button from '../../../components/common/Button'
import { Link } from 'react-router-dom'
import { login as loginService } from './service'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import './styles.css'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const index: React.FC = () => {
  const dispatch = useAppDispatch()
  const { loading } = useAppSelector((state) => state.login)

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
  const [toggleicon, setToggleIcon] = useState(false)
  async function handleLogin(data: TLogin) {
    dispatch(loginService({ data, toast }))
  }
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container-xxl px-4 py-5 mx-auto">
        <div className="card card0">
          <div className="d-flex flex-lg-row flex-column-reverse">
            <div className="card card1">
              <div className="row justify-content-center my-auto  ">
                <div className="col-12 col-sm-9 col-md-7 col-lg-9 my-5 ">
                  <p className="text-center text__logo h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    React-Task
                  </p>
                  {/* form section */}
                  <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="d-flex flex-row align-items-center mb-2">
                      <div className="form-floating flex-fill mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          {...register('email')}
                        />
                        <label htmlFor="floatingInput">Email</label>
                        {errors.email && (
                          <p className="error">{errors.email?.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <div className="form-floating flex-fill mb-3">
                        <input
                          type={toggleicon ? 'text' : 'password'}
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                          {...register('password')}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                        {toggleicon ? (
                          <i
                            className="bi bi-eye-fill icon"
                            onClick={() => setToggleIcon(!toggleicon)}
                          ></i>
                        ) : (
                          <i
                            className="bi bi-eye-slash-fill icon"
                            onClick={() => {
                              setToggleIcon(!toggleicon)
                            }}
                          ></i>
                        )}

                        {errors.password && (
                          <p className="error">{errors.password?.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center mb-3 mb-lg-4">
                      <Button
                        type="submit"
                        theme="primary"
                        disabled={loading}
                        requesting={loading}
                      >
                        Log in
                      </Button>
                    </div>

                    <div className="text-center mb-2">
                      <p>
                        <span className="span__text">
                          Don&lsquo;t have an account?{' '}
                        </span>{' '}
                        <Link className="text__link" to={'/auth/register'}>
                          Register
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="card card2">
              <div className="my-auto mx-md-5 px-md-5 right">
                <h3 className="text-white mb-2">
                  We are more than just a company
                </h3>
                <small className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default index
