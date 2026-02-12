import { Upload, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import type { UploadFile, UploadProps } from 'antd'
import { useState, useEffect } from 'react'
import { uploadApi } from '../services/api'

interface UploadImageProps {
  value?: string
  onChange?: (url: string) => void
  maxSize?: number
}

const UploadImage = ({ value, onChange, maxSize = 5 }: UploadImageProps) => {
  const [fileList, setFileList] = useState<UploadFile[]>([])

  useEffect(() => {
    if (value) {
      setFileList([
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: value.startsWith('http') ? value : `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'}${value}`,
        },
      ])
    } else {
      setFileList([])
    }
  }, [value])

  const beforeUpload = (file: File) => {
    const isImage = file.type.startsWith('image/')
    if (!isImage) {
      message.error('只能上传图片文件!')
      return false
    }
    const isLtMaxSize = file.size / 1024 / 1024 < maxSize
    if (!isLtMaxSize) {
      message.error(`图片大小不能超过 ${maxSize}MB!`)
      return false
    }
    return true
  }

  const customRequest = async (options: any) => {
    const { file, onSuccess, onError } = options
    try {
      const response = await uploadApi.uploadImage(file as File)
      onSuccess(response, file)
    } catch (error) {
      onError(error)
    }
  }

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList)
    if (newFileList.length > 0 && newFileList[0].status === 'done') {
      const url = newFileList[0].response?.url || newFileList[0].url
      onChange?.(url || '')
    } else {
      onChange?.('')
    }
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>上传</div>
    </div>
  )

  return (
    <Upload
      listType="picture-card"
      fileList={fileList}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      customRequest={customRequest}
      maxCount={1}
    >
      {fileList.length === 0 && uploadButton}
    </Upload>
  )
}

export default UploadImage
