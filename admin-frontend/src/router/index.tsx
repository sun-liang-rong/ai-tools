import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainLayout from '../layout'
import Dashboard from '../pages/dashboard'
import ToolList from '../pages/tool/List'
import ToolCreate from '../pages/tool/Create'
import ToolEdit from '../pages/tool/Edit'
import CategoryList from '../pages/category/List'
import SubmissionList from '../pages/submission/List'
import AdList from '../pages/ad/List'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'tool',
        element: <ToolList />,
      },
      {
        path: 'tool/create',
        element: <ToolCreate />,
      },
      {
        path: 'tool/edit/:id',
        element: <ToolEdit />,
      },
      {
        path: 'category',
        element: <CategoryList />,
      },
      {
        path: 'submission',
        element: <SubmissionList />,
      },
      {
        path: 'ad',
        element: <AdList />,
      },
    ],
  },
])

export default router
