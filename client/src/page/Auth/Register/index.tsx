import React, { useState } from 'react'
import './styles.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterSchema } from '../../../schemas/AuthSchema'
import { TRegister } from '../types'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { register as registerService } from './service'
import Button from '../../../components/common/Button'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const index: React.FC = () => {
  const { loading } = useAppSelector((state: any) => state.register)

  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false)
  const [togglePassword, setTogglePassword] = useState(false)
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

  async function handleRegister(data: TRegister) {
    dispatch(registerService({ data, toast }))
  }

  return (
    <>
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
                    <form onSubmit={handleSubmit(handleRegister)}>
                      <div className="d-flex flex-row align-items-center mb-2">
                        <div className="form-floating flex-fill mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            {...register('name')}
                          />
                          <label htmlFor="floatingInput">Username</label>
                          {errors.name && (
                            <p className="error">{errors.name?.message}</p>
                          )}
                        </div>
                      </div>
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
                      <div className="d-flex flex-row align-items-center mb-2">
                        <div className="form-floating flex-fill mb-3">
                          <input
                            type={togglePassword ? 'text' : 'password'}
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            {...register('password')}
                          />
                          <label htmlFor="floatingPassword">Password</label>
                          {togglePassword ? (
                            <i
                              className="bi bi-eye-fill icon"
                              onClick={() => setTogglePassword(!togglePassword)}
                            ></i>
                          ) : (
                            <i
                              className="bi bi-eye-slash-fill icon"
                              onClick={() => {
                                setTogglePassword(!togglePassword)
                              }}
                            ></i>
                          )}

                          {errors.password && (
                            <p className="error">{errors.password?.message}</p>
                          )}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center ">
                        <div className="form-floating flex-fill mb-3">
                          <input
                            type={toggleConfirmPassword ? 'text' : 'password'}
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Confirm Password"
                            {...register('passwordConfirm')}
                          />
                          <label htmlFor="floatingPassword">
                            Confirm Password
                          </label>
                          {/* eye icon toggle  */}
                          {toggleConfirmPassword ? (
                            <i
                              className="bi bi-eye-fill icon"
                              onClick={() =>
                                setToggleConfirmPassword(!toggleConfirmPassword)
                              }
                            ></i>
                          ) : (
                            <i
                              className="bi bi-eye-slash-fill icon"
                              onClick={() => {
                                setToggleConfirmPassword(!toggleConfirmPassword)
                              }}
                            ></i>
                          )}
                          {errors.passwordConfirm && (
                            <p className="error">
                              {errors.passwordConfirm?.message}
                            </p>
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
                          Register
                        </Button>
                      </div>

                      <div className="text-center mb-2">
                        <p>
                          <span className="span__text">
                            Already have an account?{' '}
                          </span>{' '}
                          <Link className="text__link" to={'/auth/login'}>
                            Login
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default index
