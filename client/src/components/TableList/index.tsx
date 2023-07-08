/* eslint-disable jsx-a11y/anchor-is-valid */
import { EditFilled, DeleteFilled } from '@ant-design/icons'
import { Table, Popconfirm } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React from 'react'
import Img from '../../assets/images/hero.jpg'
import './styles.css'

interface DataType {
  key: string
  name: string
  price: number
  description: string
  img: string
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    price: 32,
    description: 'New York No. 1 Lake Park',
    img: Img,
  },
  {
    key: '2',
    name: 'Joe Black',
    price: 42,
    description: 'London No. 1 Lake Park',
    img: Img,
  },
  {
    key: '3',
    name: 'Jim Green',
    price: 32,
    description: 'Sydney No. 1 Lake Park',
    img: Img,
  },
  {
    key: '4',
    name: 'Jim Red',
    price: 32,
    description: 'London No. 2 Lake Park',
    img: Img,
  },
]

const index: React.FC = () => {
  const handleDelete = (key: React.Key) => {
    console.log(key)
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      render: (_, record) => (
        <>
          {record.img && (
            <>
              <img
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '100%',
                  marginRight: '16px',
                  objectFit: 'cover',
                }}
                src={record.img}
                alt={record.img}
              ></img>
            </>
          )}{' '}
          {record.name}
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
      dataIndex: 'price',
      key: 'price',
      width: '20%',
      sorter: (a, b) => a.description.length - b.description.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Action',
      dataIndex: 'operation',
      render: (_, record: { key: React.Key }) =>
        data.length >= 1 ? (
          <>
            <Popconfirm
              title="Sure to edit?"
              onConfirm={() => handleDelete(record.key)}
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
              onConfirm={() => handleDelete(record.key)}
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
        dataSource={data}
        pagination={{ pageSize: 7 }}
      />
    </>
  )
}

export default index
