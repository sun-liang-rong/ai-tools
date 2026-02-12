import { Table, Button, Space, Popconfirm, Modal, Form, Input, message, InputNumber, Card, Typography, Tag, Switch, Select, Row, Col } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined, UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { categoryApi } from '../../services/api'
import type { Category } from '../../services/api'
import UploadImage from '../../components/UploadImage'
import dayjs from 'dayjs';
const { TextArea } = Input
const { Option } = Select
const { Title, Text } = Typography

const CategoryList = () => {
  const [loading, setLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const [parentCategories, setParentCategories] = useState<Category[]>([])
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 })
  const [form] = Form.useForm()

  const fetchCategories = async (page = 1, pageSize = 10) => {
    setLoading(true)
    try {
      const {data} = await categoryApi.getList({ page, pageSize, includeChildren: true })
      console.log(data, 'response')
      setCategories(data?.data || [])
      setPagination({ current: page, pageSize, total: data.total || 0 })
    } catch (error) {
      message.error('获取分类列表失败')
    } finally {
      setLoading(false)
    }
  }

  const fetchParentCategories = async () => {
    try {
      const {data} = await categoryApi.getList({ parent_id: null })
      setParentCategories(data?.data || [])
    } catch (error) {
      console.error('获取父分类失败', error)
    }
  }

  useEffect(() => {
    fetchCategories()
    fetchParentCategories()
  }, [])

  const handleDelete = async (id: number) => {
    try {
      await categoryApi.delete(id)
      message.success('删除成功')
      fetchCategories(pagination.current, pagination.pageSize)
      fetchParentCategories()
    } catch (error) {
      message.error('删除失败')
    }
  }

  const handleTableChange = (page: number, pageSize: number) => {
    fetchCategories(page, pageSize)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: '分类名称',
      dataIndex: 'name',
      key: 'name',
      width: 200,
      render: (name: string, record: Category) => (
        <Space>
          {record.icon && (
            record.icon.startsWith('http') || record.icon.startsWith('/') ? (
              <img src={record.icon.startsWith('http') ? record.icon : `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'}${record.icon}`} alt="" style={{ width: 24, height: 24 }} />
            ) : (
              <span>{record.icon}</span>
            )
          )}
          <Text strong>{name}</Text>
        </Space>
      ),
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
      key: 'slug',
      width: 120,
      render: (slug: string) => <Tag>{slug}</Tag>,
    },
    {
      title: '父分类',
      dataIndex: 'parent',
      key: 'parent',
      width: 120,
      render: (parent: Category) => parent ? <Tag>{parent.name}</Tag> : <Text type="secondary">-</Text>,
    },
    {
      title: '显示设置',
      key: 'displays',
      width: 120,
      render: (_: any, record: Category) => (
        <Space size="small">
          {record.is_show && <Tag color="green">显示</Tag>}
          {record.is_home && <Tag color="orange">首页</Tag>}
        </Space>
      ),
    },
    {
      title: '工具数',
      dataIndex: 'tool_count',
      key: 'tool_count',
      width: 80,
      render: (count: number) => <Tag color="blue">{count}</Tag>,
    },
    {
      title: '排序',
      dataIndex: 'sort',
      key: 'sort',
      width: 80,
      render: (sort: number) => <Text type="secondary">{sort}</Text>,
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
      width: 200,
      ellipsis: true,
      render: (desc: string) => <Text type="secondary">{desc || '-'}</Text>,
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      key: 'created_at',
      width: 180,
      render: (date: string) => <Text type="secondary">{dayjs(date).format('YYYY-MM-DD HH:mm:ss')}</Text>,
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      fixed: 'end' as const,
      render: (_: any, record: Category) => (
        <Space>
          <Button type="link" size="small" icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            编辑
          </Button>
          <Popconfirm title="确定要删除这个分类吗？" onConfirm={() => handleDelete(record.id)} okText="确定" cancelText="取消">
            <Button type="link" danger size="small" icon={<DeleteOutlined />}>
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  const handleAdd = () => {
    setEditingCategory(null)
    form.resetFields()
    form.setFieldsValue({
      sort: 0,
      is_show: 1,
      is_home: 0,
    })
    setModalVisible(true)
  }

  const handleEdit = (category: Category) => {
    setEditingCategory(category)
    form.setFieldsValue({
      ...category,
      parent_id: category.parent_id,
    })
    setModalVisible(true)
  }

  const handleModalOk = async () => {
    try {
      const values = await form.validateFields()
      if (editingCategory) {
        await categoryApi.update(editingCategory.id, values)
        message.success('更新成功')
      } else {
        await categoryApi.create(values)
        message.success('创建成功')
      }
      setModalVisible(false)
      fetchCategories(pagination.current, pagination.pageSize)
      fetchParentCategories()
    } catch (error) {
      message.error(editingCategory ? '更新失败' : '创建失败')
    }
  }

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Space style={{ width: '100%', justifyContent: 'space-between' }}>
        <div>
          <Title level={3} style={{ margin: 0 }}>分类管理</Title>
          <Text type="secondary">管理平台所有工具分类，支持多级分类</Text>
        </div>
        <Space>
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            新增分类
          </Button>
        </Space>
      </Space>

      <Card>
          <Table
            columns={columns}
            dataSource={categories}
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
            expandable={{
              expandedRowRender: (record) => {
                if (!record.children || record.children.length === 0) return null
                return (
                  <Table
                    columns={columns}
                    dataSource={record.children}
                    rowKey="id"
                    pagination={false}
                    showHeader={false}
                    size="small"
                  />
                )
              },
              expandIcon: ({ expanded, onExpand, record }) => {
                if (!record.children || record.children.length === 0) {
                  return <span style={{ width: 24 }} />
                }
                return expanded ? (
                  <a onClick={(e) => onExpand(record, e)} style={{ marginRight: 8 }}>
                    <UnorderedListOutlined />
                  </a>
                ) : (
                  <a onClick={(e) => onExpand(record, e)} style={{ marginRight: 8 }}>
                    <AppstoreOutlined />
                  </a>
                )
              },
            }}
          />
      </Card>

      <Modal
        title={editingCategory ? '编辑分类' : '新增分类'}
        open={modalVisible}
        onOk={handleModalOk}
        onCancel={() => setModalVisible(false)}
        width={600}
        okText="确定"
        cancelText="取消"
      >
        <Form form={form} layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="分类名称"
                name="name"
                rules={[{ required: true, message: '请输入分类名称' }, { max: 50, message: '分类名称不能超过50个字符' }]}
              >
                <Input placeholder="请输入分类名称" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Slug"
                name="slug"
                rules={[{ required: true, message: '请输入 Slug' }, { max: 100, message: 'Slug不能超过100个字符' }]}
              >
                <Input placeholder="URL 友好的标识符" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="图标" name="icon">
                <UploadImage />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="父分类" name="parent_id">
                <Select placeholder="选择父分类" allowClear>
                  {parentCategories.map(cat => (
                    <Option key={cat.id} value={cat.id} disabled={editingCategory?.id === cat.id}>
                      {cat.icon && <img src={cat.icon.startsWith('http') ? cat.icon : `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'}${cat.icon}`} alt="" style={{ width: 16, height: 16, marginRight: 4 }} />}{cat.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="描述" name="description">
            <TextArea placeholder="请输入分类描述（SEO用）" rows={3} maxLength={255} showCount />
          </Form.Item>

          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="排序" name="sort" initialValue={0}>
                <InputNumber placeholder="越小越靠前" style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="是否显示" name="is_show" valuePropName="checked" initialValue={1}>
                <Switch checkedChildren="是" unCheckedChildren="否" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="首页展示" name="is_home" valuePropName="checked" initialValue={0}>
                <Switch checkedChildren="是" unCheckedChildren="否" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </Space>
  )
}

export default CategoryList
