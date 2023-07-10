import React from 'react'
import {
  AppstoreOutlined,
  UserOutlined,
  DashboardOutlined,
  PlusCircleOutlined,
  DatabaseFilled,
  CodeSandboxOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import Dashboard from '../../page/Dashboard/index'
import Product from '../../page/Dashboard/Contents/Products'
const { Content, Sider } = Layout
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as RouteList from '../../routes/constant'
import './styles.css'
const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  var location = useLocation()
  const [selectedKeys, setSelectedKeys] = useState('/')

  useEffect(() => {
    const pathName = location.pathname
    setSelectedKeys(pathName)
  }, [location.pathname])
  const navigate = useNavigate()
  // const componentSwitch = (path: any) => {
  //   switch (path) {
  //     case path === RouteList.dashboard:
  //       return <Dashboard />
  //     case path === RouteList.products:
  //       return <Products />
  //   }
  // }

  const menuItem = [
    {
      label: 'Overview',
      icon: <DashboardOutlined />,
      key: '/dashboard',
    },
    {
      label: 'Product',
      icon: <CodeSandboxOutlined />,
      subItem: [
        {
          label: 'Product List',
          key: '/products',
          icon: <DatabaseFilled />,
        },
        {
          label: 'Add Product',
          key: '/form',
          icon: <PlusCircleOutlined />,
        },
      ],
    },
  ]

  const items: MenuProps['items'] = menuItem.map((menuitem, index) => {
    return {
      key: menuitem.key || index,
      icon: menuitem.icon,
      label: menuitem.label,
      children: menuitem?.subItem?.map((item: any) => {
        return {
          key: item.key,
          label: item.label,
          icon: item.icon,
        }
      }),
    }
  })

  return (
    <Layout
      style={{
        overflow: 'auto',
        height: '100vh',
      }}
    >
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['/dashboard']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            onClick={(item) => {
              //item.key
              navigate(item.key)
            }}
            items={items}
          />
        </Sider>
        {/* {location.pathname === RouteList.dashboard && <Dashboard />}
        {/* <Dashboard /> */}
        {/* {componentSwitch(location.pathname)}  */}
        {/* {location.pathname === RouteList.products && <ProductList />} */}
      </Layout>
    </Layout>
  )
}

export default App
