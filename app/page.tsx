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
        股票儀錶板
      </Link>
      <Counter></Counter>
    </div>
  )
}
