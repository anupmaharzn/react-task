import React, { useEffect } from 'react'
import './styles.css'
import { useAppSelector } from '../../../../redux/store'
import { Breadcrumb, Layout, theme } from 'antd'
const { Content } = Layout
import { useParams } from 'react-router-dom'
import Button from '../../../../components/common/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { productSchema } from '../../../../schemas/ProductSchema'
import { TProduct } from '../types'
import { editProduct } from './service'
import { useAppDispatch } from '../../../../redux/store'
import toast from 'react-hot-toast'
import { string } from 'yup'
const index: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const {
    data: { data: product },
  } = useAppSelector((state) => state.getordeleteProduct)
  const { loading, data } = useAppSelector((state) => state.editProduct)
  const { id: productId } = useParams()
  const dispatch = useAppDispatch()
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<TProduct>({
    defaultValues: {
      title: product?.title,
      description: product?.description,
      price: product?.price,
      image: '',
    },
    resolver: yupResolver(productSchema),
  })

  async function handleProductEdit(data: TProduct) {
    const image = data?.image[0]
    const editData = { ...data, image }
    dispatch(editProduct({ productId, editData, toast }))
  }
  useEffect(() => {
    if (data?.status == 200) {
      reset({
        title: '',
        description: '',
        price: 0,
        image: '',
      })
    }
  }, [data?.status, reset])

  return (
    <Layout className="site-layout site-dash-layout">
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Edit</Breadcrumb.Item>
          <Breadcrumb.Item>{productId}</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            background: colorBgContainer,
            overflow: 'initial',
          }}
        >
          {/* form section */}
          <div className="container">
            <div className="row justify-content-center   ">
              <div className="col-12 col-sm-9 col-md-7 col-lg-5 ">
                <div className="card product-edit">
                  <form onSubmit={handleSubmit(handleProductEdit)}>
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
                    <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center mb-1 mb-lg-2">
                      <Button
                        type="submit"
                        theme="secondary"
                        disabled={loading}
                        requesting={loading}
                      >
                        Edit
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default index
