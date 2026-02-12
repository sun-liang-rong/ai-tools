import { Layout, Dropdown, Avatar, Badge, Space, Typography, Button } from 'antd'
import type { MenuProps } from 'antd'
import { UserOutlined, LogoutOutlined, BellOutlined, SettingOutlined } from '@ant-design/icons'

const { Header } = Layout

interface HeaderBarProps {
  style?: React.CSSProperties
}

const HeaderBar = ({ style }: HeaderBarProps) => {
  const items: MenuProps['items'] = [
    {
      key: 'profile',
      label: '个人信息',
      icon: <UserOutlined />,
    },
    {
      key: 'settings',
      label: '系统设置',
      icon: <SettingOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      label: '退出登录',
      icon: <LogoutOutlined />,
      danger: true,
    },
  ]

  return (
    <Header 
      className="ant-header"
      style={{ padding: '0 24px', background: '#fff', borderBottom: '1px solid #f0f0f0', ...style }}
    >
      <Space size="large">
        <div>
          <Typography.Title level={4} style={{ margin: 0 }}>
            管理控制台
          </Typography.Title>
        </div>
      </Space>

      <Space size="middle">
        <Badge count={3} size="small">
          <Button type="text" icon={<BellOutlined />} className="ant-btn-text" />
        </Badge>
        <Dropdown menu={{ items }} placement="bottomRight" trigger={['click']}>
          <Space style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Avatar icon={<UserOutlined />} />
            <div>
              <Typography.Text>管理员</Typography.Text>
            </div>
          </Space>
        </Dropdown>
      </Space>
    </Header>
  )
}

export default HeaderBar
