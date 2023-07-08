import React from 'react'
import { Breadcrumb, Layout, theme } from 'antd'
const { Content } = Layout
const index: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Layout className="site-layout site-dash-layout">
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            background: colorBgContainer,
            overflow: 'initial',
          }}
        >
          Add Product
        </Content>
      </Layout>
    </Layout>
  )
}

export default index
