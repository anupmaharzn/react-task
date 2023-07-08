import React from 'react'
import './styles.css'
import { Breadcrumb, Layout, theme } from 'antd'
import { useAppSelector } from '../../../../redux/store'
import DetailCard from '../../../../components/common/DetailCard'
const { Content } = Layout
const index: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const {
    loading,
    data: { data: product },
  } = useAppSelector((state) => state.getordeleteProduct)
  console.log('productDetail', product)
  return (
    <Layout className="site-layout site-dash-layout">
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Detail</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            background: colorBgContainer,
            overflow: 'initial',
          }}
        >
          {!loading && product && (
            <DetailCard
              description={product?.description}
              image={product?.image}
              price={product?.price}
              productId={product?.productId}
              title={product?.title}
            />
          )}
        </Content>
      </Layout>
    </Layout>
  )
}

export default index
