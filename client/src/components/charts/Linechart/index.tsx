//dummy component
import React from 'react'
import { Line } from '@ant-design/charts'

const index: React.FC = () => {
  const data = [
    { year: '2015', value: 3 },
    { year: '2016', value: 4 },
    { year: '2017', value: 3.5 },
    { year: '2018', value: 5 },
    { year: '2019', value: 4.9 },
    { year: '2020', value: 6 },
    { year: '2021', value: 7 },
    { year: '2022', value: 9 },
    { year: '2023', value: 13 },
  ]

  const config = {
    data,
    width: 600,
    height: 300,
    autoFit: false,
    xField: 'year',
    yField: 'value',

    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  }

  return (
    <div>
      <Line {...config} />
    </div>
  )
}
export default index
