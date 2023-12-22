import Search from '../../components/search'


export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  let stockId, stockName, stockHigh, stockLow, stockVol;
  if(search!= ''){
    const res = await fetch(
      `https://mis.twse.com.tw/stock/api/getStockInfo.jsp?json=1&delay=0&ex_ch=tse_${search}.tw`
    );
    const data = await res.json()
   stockId = data.msgArray[0].c
   stockName = data.msgArray[0].n
   stockHigh = data.msgArray[0].h
   stockLow = data.msgArray[0].l
   stockVol = data.msgArray[0].v
  }
  else {
     stockId = '';
     stockName = '';
     stockHigh = '';
     stockLow = '';
     stockVol = '';
  }
  
  

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      
      <Search />
        <p>股票代號:{stockId}</p>
        <p>股票名稱:{stockName}</p>
        <p>最高值:{stockHigh}</p>
        <p>最低值:{stockLow}</p>
        <p>成交量:{stockVol}</p>
    </main>
  );
}
