async function getData() {
    const res = await fetch(
      'https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=202110011&stockNo=2330'
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
    const stockId = data.data[0][0]
    const stockName = data.data[0][1]
    return (
      <>
        <main>
          <div>
            <p>股票代號:{stockId}</p>
            <p>股票名稱:{stockName}</p>
          </div>
        </main>
      </>
    )
  }
  