import {useEffect, useState} from 'react'
import axios from 'axios';

const RenderDataDB = () => {

    const [tradingData, setTradingData] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3001/getAllData')
        .then(res => setTradingData(res.data))
        .catch(err => console.log(err))      
    }, [])
    


  return (
    <div className='table-container'>
        <h1>
            Datos recibidos desde la base datos MongoDB:
        </h1>
        <table>
        <thead>
            <tr>
                <th>Symbol</th>
                <th>ID</th>
                <th>Side</th>
                <th>Size</th>
            </tr>
        </thead>
        <tbody>
        {tradingData.map((item) => {
            return item.data.map((dataItem, dataIndex) => (
              <tr key={dataIndex}>
                <td>{dataItem.symbol}</td>
                <td>{dataItem.id}</td>
                <td>{dataItem.side}</td>
                <td>{dataItem.size}</td>
              </tr>
            ));
          })}
        </tbody>
        </table>
    </div>
  )
}

export default RenderDataDB