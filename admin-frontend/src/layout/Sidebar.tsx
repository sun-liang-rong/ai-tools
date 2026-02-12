import { useState } from 'react'
import { Layout, Menu, Typography } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { 
  DashboardOutlined, 
  AppstoreOutlined, 
  FolderOutlined, 
  SendOutlined, 
  DollarOutlined
} from '@ant-design/icons'

const { Sider } = Layout

const menuItems = [
  { key: '/dashboard', icon: <DashboardOutlined />, label: '仪表盘' },
  { key: '/tool', icon: <AppstoreOutlined />, label: '工具管理' },
  { key: '/category', icon: <FolderOutlined />, label: '分类管理' },
  { key: '/submission', icon: <SendOutlined />, label: '用户提交' },
  { key: '/ad', icon: <DollarOutlined />, label: '广告管理' },
]

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Sider
      className="ant-sider"
      width={220}
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      breakpoint="lg"
      theme="light"
    >
      <div className="ant-layout-sider-children" style={{ height: 64, display: 'flex', alignItems: 'center', padding: '0 16px' }}>
        <Typography.Title level={5} style={{ margin: 0 }}>
          AI 导航
        </Typography.Title>
      </div>
      <Menu
        className="ant-menu"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={({ key }) => navigate(key)}
      />
    </Sider>
  )
}

export default Sidebar
