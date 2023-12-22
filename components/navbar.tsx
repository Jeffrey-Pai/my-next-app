import Image from 'next/image'

export default function Navbar() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/bull-market.png"
              alt="WebIcon"
              width={64}
              height={64}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              StockWebsite
            </span>
          </a>
        </div>
      </nav>
    </>
  )
}
