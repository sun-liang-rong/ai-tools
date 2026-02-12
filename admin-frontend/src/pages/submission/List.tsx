import { Table, Tag, Space, Button, Popconfirm, message, Select, Card, Typography, Avatar, Modal, Form, Input, type TableColumnsType } from 'antd'
import { useState, useEffect } from 'react'
import { CheckOutlined, CloseOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons'
import { submissionApi } from '../../services/api'
import type { Submission } from '../../services/api'

const { TextArea } = Input

const SubmissionList = () => {
  const [loading, setLoading] = useState(false)
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 })
  const [viewModalVisible, setViewModalVisible] = useState(false)
  const [viewingSubmission, setViewingSubmission] = useState<Submission | null>(null)
  const [remarksModalVisible, setRemarksModalVisible] = useState(false)
  const [rejectingId, setRejectingId] = useState<number | null>(null)
  const [form] = Form.useForm()

  const fetchSubmissions = async (page = 1, pageSize = 10, status?: string) => {
    setLoading(true)
    try {
      const params: any = { page, pageSize }
      if (status && status !== 'all') {
        params.status = status
      }
      const response = await submissionApi.getList(params)
      setSubmissions(response?.data?.data || [])
      setPagination({ current: page, pageSize, total: response?.data?.total || 0 })
    } catch (error) {
      message.error('获取提交列表失败')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const handleStatusChange = (value: string) => {
    setStatusFilter(value)
    fetchSubmissions(1, pagination.pageSize, value)
  }

  const handleTableChange = (page: number, pageSize: number) => {
    fetchSubmissions(page, pageSize, statusFilter)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
      fixed: 'start',
    },
    {
      title: '工具信息',
      key: 'tool_info',
      width: 250,
      render: (_: any, record: Submission) => (
        <div>
          <Typography.Text strong>{record.tool_name}</Typography.Text>
          <a 
            href={record.website_url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'block' }}
          >
            <Typography.Text type="secondary" ellipsis={{ tooltip: record.website_url }}>
              {record.website_url}
            </Typography.Text>
          </a>
          {record.tags && record.tags.length > 0 && (
            <Space size={4} style={{ marginTop: 4 }}>
              {record.tags.map((tag: string, index: number) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </Space>
          )}
        </div>
      ),
    },
    {
      title: '简短描述',
      dataIndex: 'short_description',
      key: 'short_description',
      width: 200,
      ellipsis: true,
      render: (desc: string) => <Typography.Text type="secondary">{desc || '-'}</Typography.Text>,
    },
    {
      title: '提交人',
      key: 'submitter',
      width: 180,
      render: (_: any, record: Submission) => (
        <Space>
          <Avatar icon={<UserOutlined />} />
          <div>
            <Typography.Text>{record.submitter_name || '匿名'}</Typography.Text>
            {record.submitter_email && (
              <Typography.Text type="secondary" style={{ display: 'block', fontSize: 12 }}>
                {record.submitter_email}
              </Typography.Text>
            )}
          </div>
        </Space>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
      key: 'status',
      render: (status: keyof typeof statusConfig) => (
        <Tag color={statusConfig[status]?.color}>{statusConfig[status]?.text || status}</Tag>
      ),
    },
    {
      title: '备注',
      dataIndex: 'remarks',
      key: 'remarks',
      width: 150,
      ellipsis: true,
      render: (remarks: string) => <Typography.Text type="secondary">{remarks || '-'}</Typography.Text>,
    },
    {
      title: '提交时间',
      dataIndex: 'created_at',
      key: 'created_at',
      width: 120,
      render: (date: string) => <Typography.Text type="secondary">{date}</Typography.Text>,
    },
    {
      title: '操作',
      width: 200,
      key: 'action',
      fixed: 'end' as const,
      render: (_: any, record: Submission) => (
        <Space>
          <Button type="link" icon={<EyeOutlined />} onClick={() => handleView(record)}>
            查看
          </Button>
          {record.status === 'pending' && (
            <>
              <Popconfirm
                title="确定要通过这个提交吗？"
                onConfirm={() => handleApprove(record.id)}
                okText="确定"
                cancelText="取消"
              >
                <Button type="link" icon={<CheckOutlined />}>
                  通过
                </Button>
              </Popconfirm>
              <Button 
                type="link" 
                danger 
                icon={<CloseOutlined />} 
                onClick={() => handleRejectClick(record.id)}
              >
                拒绝
              </Button>
            </>
          )}
        </Space>
      ),
    },
  ]

  const statusConfig = {
    pending: {
      text: '待审核',
      color: 'orange',
    },
    approved: {
      text: '已通过',
      color: 'green',
    },
    rejected: {
      text: '已拒绝',
      color: 'red',
    },
  }

  const handleView = (record: Submission) => {
    setViewingSubmission(record)
    setViewModalVisible(true)
  }

  const handleApprove = async (id: number) => {
    try {
      await submissionApi.approve(id)
      message.success('已通过')
      fetchSubmissions(pagination.current, pagination.pageSize, statusFilter)
    } catch (error) {
      message.error('操作失败')
    }
  }

  const handleRejectClick = (id: number) => {
    setRejectingId(id)
    setRemarksModalVisible(true)
    form.resetFields()
  }

  const handleReject = async () => {
    try {
      const values = await form.validateFields()
      if (rejectingId) {
        await submissionApi.reject(rejectingId, values.remarks)
        message.success('已拒绝')
        setRemarksModalVisible(false)
        setRejectingId(null)
        fetchSubmissions(pagination.current, pagination.pageSize, statusFilter)
      }
    } catch (error) {
      message.error('操作失败')
    }
  }

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Space style={{ justifyContent: 'space-between' }}>
        <div>
          <Typography.Title level={3} style={{ margin: 0 }}>用户提交</Typography.Title>
          <Typography.Text type="secondary">审核和管理用户提交的工具</Typography.Text>
        </div>
        <Select
          className="ant-select"
          value={statusFilter}
          onChange={handleStatusChange}
          style={{ width: 160 }}
          options={[
            { value: 'all', label: '全部状态' },
            { value: 'pending', label: '待审核' },
            { value: 'approved', label: '已通过' },
            { value: 'rejected', label: '已拒绝' },
          ]}
        />
      </Space>

      <Card>
        <Table
          columns={columns as TableColumnsType<Submission>}
          className="ant-table"
          dataSource={submissions}
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
        title="提交详情"
        open={viewModalVisible}
        onCancel={() => setViewModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setViewModalVisible(false)}>
            关闭
          </Button>,
        ]}
        width={700}
      >
        {viewingSubmission && (
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Typography.Text type="secondary">工具名称</Typography.Text>
              <div style={{ marginTop: 8 }}>
                <Typography.Text strong style={{ fontSize: 18 }}>
                  {viewingSubmission.tool_name}
                </Typography.Text>
              </div>
            </div>
            <div>
              <Typography.Text type="secondary">网站地址</Typography.Text>
              <div style={{ marginTop: 8 }}>
                <a href={viewingSubmission.website_url} target="_blank" rel="noopener noreferrer">
                  {viewingSubmission.website_url}
                </a>
              </div>
            </div>
            {viewingSubmission.tags && viewingSubmission.tags.length > 0 && (
              <div>
                <Typography.Text type="secondary">标签</Typography.Text>
                <div style={{ marginTop: 8 }}>
                  <Space>
                    {viewingSubmission.tags.map((tag: string, index: number) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </Space>
                </div>
              </div>
            )}
            <div>
              <Typography.Text type="secondary">简短描述</Typography.Text>
              <div style={{ marginTop: 8 }}>
                <Typography.Text>{viewingSubmission.short_description}</Typography.Text>
              </div>
            </div>
            {viewingSubmission.description && (
              <div>
                <Typography.Text type="secondary">详细描述</Typography.Text>
                <div style={{ marginTop: 8 }}>
                  <Typography.Text>{viewingSubmission.description}</Typography.Text>
                </div>
              </div>
            )}
            <div>
              <Typography.Text type="secondary">提交人</Typography.Text>
              <div style={{ marginTop: 8 }}>
                <Typography.Text>{viewingSubmission.submitter_name || '匿名'}</Typography.Text>
                {viewingSubmission.submitter_email && (
                  <Typography.Text type="secondary" style={{ marginLeft: 16 }}>
                    {viewingSubmission.submitter_email}
                  </Typography.Text>
                )}
              </div>
            </div>
            {viewingSubmission.remarks && (
              <div>
                <Typography.Text type="secondary">备注</Typography.Text>
                <div style={{ marginTop: 8 }}>
                  <Typography.Text>{viewingSubmission.remarks}</Typography.Text>
                </div>
              </div>
            )}
            <div>
              <Typography.Text type="secondary">提交时间</Typography.Text>
              <div style={{ marginTop: 8 }}>
                <Typography.Text type="secondary">{viewingSubmission.created_at}</Typography.Text>
              </div>
            </div>
          </Space>
        )}
      </Modal>

      <Modal
        title="拒绝提交"
        open={remarksModalVisible}
        onOk={handleReject}
        onCancel={() => {
          setRemarksModalVisible(false)
          setRejectingId(null)
        }}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="remarks"
            label="拒绝原因"
            rules={[{ required: true, message: '请输入拒绝原因' }]}
          >
            <TextArea placeholder="请输入拒绝原因" rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  )
}

export default SubmissionList
