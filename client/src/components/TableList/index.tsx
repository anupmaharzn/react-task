/* eslint-disable jsx-a11y/anchor-is-valid */
import { EditFilled, DeleteFilled } from '@ant-design/icons'
import { Table, Popconfirm, Spin } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React from 'react'
import { environmentConfig } from '../../config/enviroment'
import './styles.css'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import {
  getProduct,
  deleteProduct,
} from '../../page/Dashboard/Contents/Products/service'
import toast from 'react-hot-toast'
type TProductData = {
  _id: string
  title: string
  description: string
  image: string
  productId: string
  price: number
  createdAt: Date
  updatedAt: Date
  __v: number
  user: string
}
const baseUrl = environmentConfig.baseUrlDev
const index: React.FC = () => {
  const {
    loading,
    data: { data: productData },
  } = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  async function handleEdit(key: string) {
    console.log(key)
  }

  async function handleDelete(productId: string) {
    dispatch(deleteProduct({ productId, toast }))
  }

  async function handleProductDetail(productId: string) {
    dispatch(getProduct({ productId }))
  }

  const columns: ColumnsType<TProductData> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      render: (_, record) => (
        <>
          {record.image && (
            <div
              className="product-name"
              onClick={() => handleProductDetail(record.productId)}
            >
              <img
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '100%',
                  marginRight: '16px',
                  objectFit: 'cover',
                }}
                src={`${baseUrl}/${record.image}`}
                alt="productimg"
              ></img>
              {record.title}
            </div>
          )}
        </>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      // dataIndex: 'price',
      key: 'price',
      width: '20%',
      sorter: (a, b) => a.description.length - b.description.length,
      sortDirections: ['descend', 'ascend'],
      render: (_, record: { price: React.Key }) => (
        <span>Rs. {record.price}</span>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'operation',
      render: (_, record: { productId: string }) =>
        productData.length >= 1 ? (
          <>
            <Popconfirm
              title="Sure to edit?"
              onConfirm={() => handleEdit(record.productId)}
            >
              <a
                style={{
                  marginRight: '10px',
                  color: '#7971ea',
                }}
              >
                <EditFilled />
              </a>
            </Popconfirm>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record.productId)}
            >
              <a
                style={{
                  color: '#8d4113',
                }}
              >
                <DeleteFilled />
              </a>
            </Popconfirm>
          </>
        ) : null,
    },
  ]

  return (
    <>
      <Table
        className="table"
        columns={columns}
        dataSource={productData}
        pagination={{ pageSize: 5 }}
        loading={{
          indicator: (
            <div>
              <Spin />
            </div>
          ),
          spinning: loading,
        }}
      />
    </>
  )
}

export default index
