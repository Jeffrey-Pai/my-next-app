export default function Footer() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <a
          href="/dashboard"
          className="block mb-2 text-blue-500 hover:underline"
        >
          dashboard
        </a>
        <a
          href="/account/login"
          className="block mb-2 text-blue-500 hover:underline"
        >
          login
        </a>
        <a
          href="/account/register"
          className="block text-blue-500 hover:underline"
        >
          register
        </a>
        <a href="/blog/a" className="block text-blue-500 hover:underline">
          blog
        </a>
        <a href="/search" className="block text-blue-500 hover:underline">
          search
        </a>
      </div>
    </>
  )
}
