async function getData() {
  const res = await fetch(
    'https://mis.twse.com.tw/stock/api/getStockInfo.jsp?json=1&delay=0&ex_ch=tse_2330.tw'
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()
  const stockId = data.msgArray[0].c
  const stockName = data.msgArray[0].n
  return (
    <main>
      <div>
        <p>{stockId}</p>
        <p>{stockName}</p>
      </div>
    </main>
  )
}
