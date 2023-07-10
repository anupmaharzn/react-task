import React, { useEffect } from 'react'
import './styles.css'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import Button from '../common/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { productSchema } from '../../schemas/ProductSchema'
import { TProduct } from '../../page/Dashboard/Contents/types'
import { addProduct } from '../../page/Dashboard/Contents/AddProduct/service'
import toast from 'react-hot-toast'

const index: React.FC = () => {
  const { loading, data } = useAppSelector((state) => state.addProduct)

  const dispatch = useAppDispatch()
  const {
    handleSubmit,
    register,
    reset,

    formState: { errors, isSubmitSuccessful },
  } = useForm<TProduct>({
    defaultValues: {
      title: '',
      description: '',
      price: 0,
      image: '',
    },
    resolver: yupResolver(productSchema),
  })

  async function handleAddProduct(data: TProduct) {
    const image = data?.image[0]
    const addData = { ...data, image }
    dispatch(addProduct({ addData, toast }))
  }
  useEffect(() => {
    if (data?.status === 201) {
      reset({
        title: '',
        description: '',
        price: 0,
        image: '',
      })
    }
  }, [data?.status, reset, isSubmitSuccessful])
  return (
    <div>
      {/* form section */}
      <div className="container">
        <div className="row justify-content-center   ">
          <div className="col-12 col-lg-9  ">
            <div className="card product-edit">
              <form
                className="form-container"
                onSubmit={handleSubmit(handleAddProduct)}
              >
                <div>
                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-floating flex-fill mb-1">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="adcproduct"
                        {...register('title')}
                      />
                      <label htmlFor="floatingInput">Title</label>
                      {errors.title && (
                        <p className="error">{errors.title?.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-floating flex-fill mb-1">
                      <textarea
                        className="form-control"
                        id="floatingInput"
                        placeholder="adcdescription"
                        {...register('description')}
                      />
                      <label htmlFor="floatingInput">Description</label>
                      {errors.description && (
                        <p className="error">{errors.description?.message}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-floating flex-fill mb-1">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="adcproduct"
                        {...register('price')}
                      />
                      <label htmlFor="floatingInput">Price</label>
                      {errors.price && (
                        <p className="error">{errors.price?.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-floating flex-fill mb-1">
                      <input
                        type="file"
                        className="form-control"
                        id="floatingInput"
                        {...register('image')}
                      />
                      <label htmlFor="floatingInput">Image</label>
                      {errors.image && (
                        <p className="error">{errors.image?.message}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="btn-wrapper mb-1 mb-lg-2">
                  <Button
                    type="submit"
                    theme="default"
                    disabled={loading}
                    requesting={loading}
                  >
                    Add Product
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
