import { Card } from 'antd'

interface PageContainerProps {
  title?: string
  children: React.ReactNode
}

const PageContainer = ({ title, children }: PageContainerProps) => {
  return (
    <Card className="shadow-sm">
      {title && <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>}
      {children}
    </Card>
  )
}

export default PageContainer
