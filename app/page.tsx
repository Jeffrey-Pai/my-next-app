'use client'
import Link from 'next/link'
import Counter from '../component/counter'

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link
        href="/dashboard"
        className="block mb-2 text-blue-500 hover:underline"
      >
        StockDashBoard
      </Link>
      <Counter></Counter>
    </div>
  )
}
