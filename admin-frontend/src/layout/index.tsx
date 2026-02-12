import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import HeaderBar from './HeaderBar'

const { Content } = Layout

const MainLayout = () => {
  return (
    <Layout className="ant-layout" style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <HeaderBar />
        <Content className="ant-layout-content" style={{ padding: 24, height: 'calc(100vh - 64px)', overflowY: 'auto' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
