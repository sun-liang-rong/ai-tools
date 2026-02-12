import { useState, useEffect } from 'react'
import { Form, Input, Select, Switch, Button, message, Card, Space, Typography, Row, Col, InputNumber } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate, useParams } from 'react-router-dom'
import { toolApi, categoryApi } from '../../services/api'
import type { Category } from '../../services/api'

const { Option } = Select
const { TextArea } = Input

const ToolEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return
      setLoading(true)
      try {
        const [toolRes, categoryRes] = await Promise.all([
          toolApi.getById(Number(id)),
          categoryApi.getList()
        ])
        
        setCategories(categoryRes?.data?.data || [])
        
        if (toolRes?.data) {
          form.setFieldsValue({
            ...toolRes.data,
            is_free: toolRes.data.is_free === 1,
            is_chinese: toolRes.data.is_chinese === 1,
            is_open_source: toolRes.data.is_open_source === 1,
            has_api: toolRes.data.has_api === 1,
            is_recommend: toolRes.data.is_recommend === 1,
            is_home: toolRes.data.is_home === 1,
            status: toolRes.data.status === 1,
          })
        }
      } catch (error) {
        console.error('获取数据失败:', error)
        message.error('获取工具信息失败')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id, form])

  const onFinish = async (values: any) => {
    if (!id) return
    setLoading(true)
    try {
      // 转换 boolean 为 number
      const submitData = {
        ...values,
        is_free: values.is_free ? 1 : 0,
        is_chinese: values.is_chinese ? 1 : 0,
        is_open_source: values.is_open_source ? 1 : 0,
        has_api: values.has_api ? 1 : 0,
        is_recommend: values.is_recommend ? 1 : 0,
        is_home: values.is_home ? 1 : 0,
        status: values.status ? 1 : 0,
      }
      await toolApi.update(Number(id), submitData)
      message.success('更新成功')
      navigate('/tool')
    } catch (error) {
      console.error('更新失败:', error)
      message.error('更新失败')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Space>
        <Button icon={<ArrowLeftOutlined />} onClick={() => navigate('/tool')}>
          返回
        </Button>
        <Typography.Title level={3} style={{ margin: 0 }}>编辑工具</Typography.Title>
      </Space>

      <Card className="ant-card" loading={loading}>
        <Form
          form={form}
          layout="vertical"
          className="ant-form"
          onFinish={onFinish}
        >
          <Typography.Title level={5}>基本信息</Typography.Title>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="工具名称"
                name="name"
                rules={[{ required: true, message: '请输入工具名称' }, { max: 100, message: '最多100个字符' }]}
              >
                <Input placeholder="请输入工具名称" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="URL 标识 (Slug)"
                name="slug"
                rules={[{ required: true, message: '请输入 Slug' }, { max: 120, message: '最多120个字符' }]}
              >
                <Input placeholder="请输入唯一的 URL 标识" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Logo 地址"
                name="logo"
                rules={[{ max: 255, message: '最多255个字符' }]}
              >
                <Input placeholder="请输入 Logo 图片 URL" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="官网链接"
                name="website"
                rules={[{ required: true, message: '请输入官网链接' }, { type: 'url', message: '请输入有效的 URL' }, { max: 255, message: '最多255个字符' }]}
              >
                <Input placeholder="https://..." />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="简短介绍 (列表展示)"
            name="short_desc"
            rules={[{ required: true, message: '请输入简短介绍' }, { max: 255, message: '最多255个字符' }]}
          >
            <Input placeholder="一句话介绍该工具" />
          </Form.Item>

          <Form.Item
            label="详细介绍 (详情页展示)"
            name="content"
            rules={[{ required: true, message: '请输入详细介绍' }]}
          >
            <TextArea rows={6} placeholder="支持 HTML 或纯文本" />
          </Form.Item>

          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="所属分类"
                name="category_id"
                rules={[{ required: true, message: '请选择分类' }]}
              >
                <Select placeholder="请选择分类">
                  {categories.map(cat => (
                    <Option key={cat.id} value={cat.id}>{cat.name}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="排序"
                name="sort"
              >
                <InputNumber min={0} style={{ width: '100%' }} />
              </Form.Item>
            </Col>
          </Row>

          <Typography.Title level={5} style={{ marginTop: 24 }}>功能特性</Typography.Title>
          <Row gutter={16}>
            <Col xs={12} md={3}>
              <Form.Item label="是否免费" name="is_free" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
            <Col xs={12} md={3}>
              <Form.Item label="支持中文" name="is_chinese" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
            <Col xs={12} md={3}>
              <Form.Item label="是否开源" name="is_open_source" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
            <Col xs={12} md={3}>
              <Form.Item label="提供 API" name="has_api" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
            <Col xs={12} md={3}>
              <Form.Item label="推荐展示" name="is_recommend" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
            <Col xs={12} md={3}>
              <Form.Item label="首页展示" name="is_home" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
            <Col xs={12} md={3}>
              <Form.Item label="立即上线" name="status" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
          </Row>

          <Typography.Title level={5} style={{ marginTop: 24 }}>SEO 设置</Typography.Title>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="SEO 标题"
                name="seo_title"
                rules={[{ max: 150, message: '最多150个字符' }]}
              >
                <Input placeholder="不填则默认使用工具名称" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="SEO 描述"
                name="seo_description"
                rules={[{ max: 255, message: '最多255个字符' }]}
              >
                <Input placeholder="不填则默认使用简短介绍" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item style={{ marginTop: 32 }}>
            <Button type="primary" htmlType="submit" loading={loading} size="large" block>
              提交更新
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  )
}

export default ToolEdit
