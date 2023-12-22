import { NextApiRequest, NextApiResponse } from 'next'

async function getData() {
  const res = await fetch(
    'https://mis.twse.com.tw/stock/api/getStockInfo.jsp?json=1&delay=0&ex_ch=tse_2317.tw'
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await getData()

    const stockInfo = {
      stockId: data.msgArray[0].c,
      stockName: data.msgArray[0].n,
      stockHigh: data.msgArray[0].h,
      stockLow: data.msgArray[0].l,
      stockVol: data.msgArray[0].v,
    }

    res.status(200).json(stockInfo)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
