import { Table, Tag, Space, Button, Popconfirm, Modal, Form, Input, Select, message, Switch, Card, Typography, Image, InputNumber, DatePicker } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import type { TableColumnsType } from 'antd'
import { adApi } from '../../services/api'
import type { Ad } from '../../services/api'
import dayjs from 'dayjs'

const AdList = () => {
  const [loading, setLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [editingAd, setEditingAd] = useState<Ad | null>(null)
  const [ads, setAds] = useState<Ad[]>([])
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 })
  const [form] = Form.useForm()

  const fetchAds = async (page = 1, pageSize = 10) => {
    setLoading(true)
    try {
      const response = await adApi.getList({ page, pageSize })
      setAds(response?.data?.data || [])
      setPagination({ current: page, pageSize, total: response?.data?.total || 0 })
    } catch (error) {
      message.error('获取广告列表失败')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAds()
  }, [])

  const positionMap = {
    home: '首页',
    category: '分类页',
    tool: '工具页',
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: '广告标题',
      width: 150,
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '广告图片',
      width: 120,
      dataIndex: 'image_url',
      key: 'image_url',
      render: (url: string) => (
        <Image src={url} width={80} height={40} style={{ objectFit: 'cover' }} />
      ),
    },
    {
      title: '跳转链接',
      width: 180,
      dataIndex: 'link_url',
      key: 'link_url',
      ellipsis: true,
    },
    {
      title: '位置',
      width: 100,
      dataIndex: 'position',
      key: 'position',
      render: (position: string) => positionMap[position as keyof typeof positionMap] || position,
    },
    {
      title: '状态',
      width: 80,
      dataIndex: 'is_active',
      key: 'is_active',
      render: (isActive: boolean) => (
        <Tag color={isActive ? 'green' : 'default'}>
          {isActive ? '启用' : '禁用'}
        </Tag>
      ),
    },
    {
      title: '浏览量',
      width: 80,
      dataIndex: 'views',
      key: 'views',
    },
    {
      title: '点击量',
      width: 80,
      dataIndex: 'clicks',
      key: 'clicks',
    },
    {
      title: '排序',
      width: 80,
      dataIndex: 'sort_order',
      key: 'sort_order',
    },
    {
      title: '创建时间',
      width: 120,
      dataIndex: 'created_at',
      key: 'created_at',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: '操作',
      width: 150,
      key: 'action',
      fixed: 'end',
      render: (_: any, record: Ad) => (
        <Space>
          <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            编辑
          </Button>
          <Popconfirm
            title="确定要删除这个广告吗？"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  const handleAdd = () => {
    setEditingAd(null)
    form.resetFields()
    setModalVisible(true)
  }

  const handleEdit = (ad: Ad) => {
    setEditingAd(ad)
    form.setFieldsValue({
      ...ad,
      is_active: ad.is_active,
      start_date: ad.start_date ? dayjs(ad.start_date) : undefined,
      end_date: ad.end_date ? dayjs(ad.end_date) : undefined,
    })
    setModalVisible(true)
  }

  const handleDelete = async (id: number) => {
    try {
      await adApi.delete(id)
      message.success('删除成功')
      fetchAds(pagination.current, pagination.pageSize)
    } catch (error) {
      message.error('删除失败')
    }
  }

  const handleModalOk = async () => {
    try {
      const values = await form.validateFields()
      const data = {
        ...values,
        is_active: values.is_active,
        start_date: values.start_date ? dayjs(values.start_date).format('YYYY-MM-DD') : null,
        end_date: values.end_date ? dayjs(values.end_date).format('YYYY-MM-DD') : null,
      }

      if (editingAd) {
        await adApi.update(editingAd.id, data)
        message.success('更新成功')
      } else {
        await adApi.create(data)
        message.success('创建成功')
      }
      setModalVisible(false)
      fetchAds(pagination.current, pagination.pageSize)
    } catch (error) {
      console.error('Validation failed:', error)
      message.error(editingAd ? '更新失败' : '创建失败')
    }
  }

  const handleTableChange = (page: number, pageSize: number) => {
    fetchAds(page, pageSize)
  }

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Space style={{ width: '100%', justifyContent: 'space-between' }}>
        <div>
          <Typography.Title level={3} style={{ margin: 0 }}>广告管理</Typography.Title>
          <Typography.Text type="secondary">管理首页与列表广告位</Typography.Text>
        </div>
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
          新增广告
        </Button>
      </Space>

      <Card className="ant-card">
        <Table
          className="ant-table"
          columns={columns as (TableColumnsType<Ad>)}
          dataSource={ads}
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

      <Modal
        className="ant-modal"
        title={editingAd ? '编辑广告' : '新增广告'}
        open={modalVisible}
        onOk={handleModalOk}
        onCancel={() => setModalVisible(false)}
        width={600}
      >
        <Form form={form} layout="vertical" className="ant-form">
          <Form.Item
            label="广告标题"
            name="title"
            rules={[{ required: true, message: '请输入广告标题' }]}
            className="ant-form-item"
          >
            <Input placeholder="请输入广告标题" className="ant-input" />
          </Form.Item>
          <Form.Item
            label="广告图片 URL"
            name="image_url"
            rules={[{ required: true, message: '请输入广告图片 URL' }]}
            className="ant-form-item"
          >
            <Input placeholder="请输入广告图片地址" className="ant-input" />
          </Form.Item>
          <Form.Item
            label="跳转链接"
            name="link_url"
            rules={[{ required: true, message: '请输入跳转链接' }]}
            className="ant-form-item"
          >
            <Input placeholder="https://example.com" className="ant-input" />
          </Form.Item>
          <Form.Item
            label="广告描述"
            name="description"
            className="ant-form-item"
          >
            <Input.TextArea placeholder="请输入广告描述（可选）" rows={3} className="ant-input" />
          </Form.Item>
          <Form.Item
            label="展示位置"
            name="position"
            rules={[{ required: true, message: '请选择展示位置' }]}
            className="ant-form-item"
          >
            <Select
              className="ant-select"
              placeholder="请选择展示位置"
              options={[
                { value: 'home', label: '首页' },
                { value: 'category', label: '分类页' },
                { value: 'tool', label: '工具页' },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="排序"
            name="sort_order"
            initialValue={0}
            className="ant-form-item"
          >
            <InputNumber placeholder="请输入排序值（越小越靠前）" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="启用状态" name="is_active" valuePropName="checked" initialValue={true} className="ant-form-item">
            <Switch />
          </Form.Item>
          <Form.Item label="开始日期" name="start_date" className="ant-form-item">
            <DatePicker style={{ width: '100%' }} placeholder="请选择开始日期" />
          </Form.Item>
          <Form.Item label="结束日期" name="end_date" className="ant-form-item">
            <DatePicker style={{ width: '100%' }} placeholder="请选择结束日期" />
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  )
}

export default AdList
