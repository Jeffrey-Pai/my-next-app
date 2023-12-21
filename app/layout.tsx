import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className="my-4">
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
        </div>
      </body>
    </html>
  )
}
