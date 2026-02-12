import { Card, Row, Col, Statistic, Typography, List, Tag, Progress, Space } from 'antd'
import { AppstoreOutlined, FolderOutlined, SendOutlined, UserOutlined } from '@ant-design/icons'

const Dashboard = () => {
  const recentSubmissions = [
    { name: 'AI 写作助手', category: '文本生成', status: 'pending', time: '2小时前' },
    { name: '图像识别工具', category: '图像处理', status: 'approved', time: '5小时前' },
    { name: '代码生成器', category: '开发工具', status: 'pending', time: '1天前' },
    { name: '语音转文字', category: '音频处理', status: 'approved', time: '2天前' },
  ]

  const hotCategories = [
    { name: '文本生成', count: 234, percent: 85 },
    { name: '图像处理', count: 189, percent: 68 },
    { name: '音频处理', count: 156, percent: 56 },
    { name: '开发工具', count: 143, percent: 52 },
    { name: '视频编辑', count: 98, percent: 35 },
  ]

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Typography.Title level={3} style={{ margin: 0 }}>仪表盘</Typography.Title>
        <Typography.Text type="secondary">欢迎回来，查看您的平台数据概览</Typography.Text>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card className="ant-card">
            <Statistic title="工具总数" value={1128} prefix={<AppstoreOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="ant-card">
            <Statistic title="分类数量" value={12} prefix={<FolderOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="ant-card">
            <Statistic title="待审核提交" value={23} prefix={<SendOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="ant-card">
            <Statistic title="活跃用户" value={1560} prefix={<UserOutlined />} />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card className="ant-card" title="近期提交">
            <List
              className="ant-list"
              dataSource={recentSubmissions}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={item.name}
                    description={item.category}
                  />
                  <Space>
                    <Tag color={item.status === 'approved' ? 'green' : 'orange'}>
                      {item.status === 'approved' ? '已通过' : '待审核'}
                    </Tag>
                    <Typography.Text type="secondary">{item.time}</Typography.Text>
                  </Space>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card className="ant-card" title="热门分类">
            <List
              className="ant-list"
              dataSource={hotCategories}
              renderItem={(item) => (
                <List.Item>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                      <Typography.Text>{item.name}</Typography.Text>
                      <Typography.Text type="secondary">{item.count}</Typography.Text>
                    </Space>
                    <Progress percent={item.percent} showInfo={false} />
                  </Space>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </Space>
  )
}

export default Dashboard
