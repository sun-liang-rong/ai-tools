import Link from 'next/link'
import type { Category } from '@/types/tool'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="block bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-6 text-white hover:shadow-lg transition-shadow duration-200"
    >
      <h3 className="text-xl font-bold">{category.name}</h3>
      <p className="text-primary-100 mt-2 text-sm">查看相关工具</p>
    </Link>
  )
}
