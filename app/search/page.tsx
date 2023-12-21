'use client'
import React, { useState } from 'react'

async function getData(searchStockId: string) {
  const res = await fetch(
    `https://mis.twse.com.tw/stock/api/getStockInfo.jsp?json=1&delay=0&ex_ch=tse_${searchStockId}.tw`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default function Page() {
  const [searchStockId, setSearchStockId] = useState('')
  const [stockHigh, setStockHigh] = useState(null)
  const [stockLow, setStockLow] = useState(null)
  const [count, setCount] = useState(0)

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSearchStockId(event.target.value)
  }

  const handleSearch = async () => {
    try {
      const data = await getData(searchStockId)
      const stockId = data.msgArray[0].c
      const stockName = data.msgArray[0].n
      const stockHigh = data.msgArray[0].h
      const stockLow = data.msgArray[0].l

      // 在這裡處理取得的資料
      console.log('Stock ID:', stockId)
      console.log('Stock Name:', stockName)
      console.log('stockHigh:', stockHigh)
      console.log('stockLow:', stockLow)

      // 更新狀態
      setStockHigh(stockHigh)
      setStockLow(stockLow)
    } catch (error) {
      console.error('Error fetching data:', error)
      // 處理錯誤，例如顯示錯誤訊息給使用者
    }
  }

  return (
    <main>
      <div>
        <label>
          股票代碼：
          <input
            type="text"
            value={searchStockId}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleSearch}>查詢</button>
      </div>
      {stockHigh !== null && stockLow !== null && (
        <div>
          <label>
            最高值：
            <input type="text" value={stockHigh} onChange={handleInputChange} />
          </label>
          <label>
            最低值：
            <input type="text" value={stockLow} onChange={handleInputChange} />
          </label>
        </div>
      )}
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </main>
  )
}
