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
  const stockHigh = data.msgArray[0].h
  const stockLow = data.msgArray[0].l
  const stockVol = data.msgArray[0].v
  return (
    <main>
      <div>
        <p>股票代號:{stockId}</p>
        <p>股票名稱:{stockName}</p>
        <p>最高值:{stockHigh}</p>
        <p>最低值:{stockLow}</p>
        <p>成交量:{stockVol}</p>
      </div>
    </main>
  )
}
