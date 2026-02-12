import { useState, useEffect } from 'react'
import { Table, Button, Space, Tag, Popconfirm, Input, Select, Card, Typography, Form, message } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { toolApi, categoryApi } from '../../services/api'
import type { Tool } from '../../services/api'
import dayjs from 'dayjs'
const ToolList = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [tools, setTools] = useState<Tool[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 })
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchCategoryId, setSearchCategoryId] = useState<number | undefined>()
  const [searchStatus, setSearchStatus] = useState<number | undefined>()

  const fetchTools = async (page = 1, pageSize = 10, filters?: any) => {
    setLoading(true)
    try {
      const {data} = await toolApi.getList({
        page,
        pageSize,
        keyword: filters?.keyword,
        category_id: filters?.category_id,
        status: filters?.status,
        includeCategory: true,
      })
      setTools(data?.data || [])
      setPagination({ current: page, pageSize, total: data?.total || 0 })
    } catch (error) {
      message.error('获取工具列表失败')
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      const { data } = await categoryApi.getList()
      setCategories(data?.data || [])
    } catch (error) {
      console.error('获取分类列表失败', error)
    }
  }

  useEffect(() => {
    fetchTools()
    fetchCategories()
  }, [])

  const handleSearch = () => {
    fetchTools(1, pagination.pageSize, {
      keyword: searchKeyword || undefined,
      category_id: searchCategoryId,
      status: searchStatus,
    })
  }

  const handleReset = () => {
    setSearchKeyword('')
    setSearchCategoryId(undefined)
    setSearchStatus(undefined)
    fetchTools(1, pagination.pageSize)
  }

  const handleDelete = async (id: number) => {
    try {
      await toolApi.delete(id)
      message.success('删除成功')
      fetchTools(pagination.current, pagination.pageSize, {
        keyword: searchKeyword || undefined,
        category_id: searchCategoryId,
        status: searchStatus,
      })
    } catch (error) {
      message.error('删除失败')
    }
  }

  const handleTableChange = (page: number, pageSize: number) => {
    fetchTools(page, pageSize, {
      keyword: searchKeyword || undefined,
      category_id: searchCategoryId,
      status: searchStatus,
    })
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: '工具名称',
      dataIndex: 'name',
      key: 'name',
      width: 180,
      render: (name: string, record: Tool) => (
        <Space>
          {record.logo && <img src={record.logo} alt="" style={{ width: 32, height: 32, borderRadius: 4, objectFit: 'cover' }} />}
          <Typography.Text strong>{name}</Typography.Text>
        </Space>
      ),
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
      key: 'slug',
      width: 120,
      ellipsis: true,
    },
    {
      title: '简介',
      dataIndex: 'short_desc',
      key: 'short_desc',
      width: 200,
      ellipsis: true,
      render: (desc: string) => <Typography.Text type="secondary">{desc}</Typography.Text>,
    },
    {
      title: '分类',
      dataIndex: 'category',
      key: 'category',
      width: 100,
      render: (category: any) => <Tag color="blue">{category?.name || '-'}</Tag>,
    },
    {
      title: '标签',
      key: 'tags',
      width: 220,
      render: (_: any, record: Tool) => (
        <Space wrap size="small">
          {record.is_free === 1 && <Tag color="green">免费</Tag>}
          {record.is_free === 0 && <Tag color="orange">付费</Tag>}
          {record.is_chinese === 1 && <Tag color="blue">中文</Tag>}
          {record.is_open_source === 1 && <Tag color="purple">开源</Tag>}
          {record.has_api === 1 && <Tag color="cyan">API</Tag>}
          {record.is_recommend === 1 && <Tag color="red">推荐</Tag>}
          {record.is_home === 1 && <Tag color="gold">首页</Tag>}
        </Space>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 80,
      render: (status: number) => (
        <Tag color={status === 1 ? 'green' : 'orange'}>
          {status === 1 ? '已发布' : '下线'}
        </Tag>
      ),
    },
    {
      title: '数据',
      key: 'stats',
      width: 150,
      render: (_: any, record: Tool) => (
        <Space direction="vertical" size={0}>
          <Typography.Text type="secondary" style={{ fontSize: '12px' }}>浏览: {record.views}</Typography.Text>
          <Typography.Text type="secondary" style={{ fontSize: '12px' }}>点击: {record.clicks}</Typography.Text>
        </Space>
      ),
    },
    {
      title: '排序',
      dataIndex: 'sort',
      key: 'sort',
      width: 70,
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      key: 'created_at',
      width: 200,
      render: (date: string) => dayjs(date).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      fixed: 'end' as const,
      render: (_: any, record: Tool) => (
        <Space>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => navigate(`/tool/edit/${record.id}`)}
          >
            编辑
          </Button>
          <Popconfirm
            title="确定要删除这个工具吗？"
            onConfirm={() => handleDelete(record.id)}
            okText="确定"
            cancelText="取消"
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Space style={{ width: '100%', justifyContent: 'space-between' }}>
        <div>
          <Typography.Title level={3} style={{ margin: 0 }}>工具管理</Typography.Title>
          <Typography.Text type="secondary">管理平台所有 AI 工具</Typography.Text>
        </div>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => navigate('/tool/create')}>
          新增工具
        </Button>
      </Space>

      <Card className="ant-card">
        <Form layout="inline" className="ant-form">
          <Form.Item className="ant-form-item">
            <Input
              placeholder="搜索工具名称/描述"
              allowClear
              style={{ width: 200 }}
              className="ant-input"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onPressEnter={handleSearch}
            />
          </Form.Item>
          <Form.Item className="ant-form-item">
            <Select
              placeholder="分类"
              style={{ width: 160 }}
              className="ant-select"
              allowClear
              value={searchCategoryId}
              onChange={setSearchCategoryId}
            >
              {categories.map(cat => (
                <Select.Option key={cat.id} value={cat.id}>{cat.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item className="ant-form-item">
            <Select
              placeholder="状态"
              style={{ width: 120 }}
              className="ant-select"
              allowClear
              value={searchStatus}
              onChange={setSearchStatus}
              options={[
                { value: 1, label: '已发布' },
                { value: 0, label: '下线' },
              ]}
            />
          </Form.Item>
          <Form.Item className="ant-form-item">
            <Button type="primary" onClick={handleSearch}>
              搜索
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={handleReset}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card className="ant-card">
        <Table
          className="ant-table"
          columns={columns}
          dataSource={tools}
          rowKey="id"
          scroll={{ x: 'max-content' }}
          loading={loading}
          pagination={{
            current: pagination.current,
            pageSize: pagination.pageSize,
            total: pagination.total,
            showSizeChanger: true,
            showTotal: (total) => `共 ${total} 条`,
            onChange: handleTableChange,
            onShowSizeChange: handleTableChange,
          }}
        />
      </Card>
    </Space>
  )
}

export default ToolList
