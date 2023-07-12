import {useEffect, useState} from 'react'
import { throttle } from 'lodash'; 

function RenderData2() {
    const [socketData, setSocketData] = useState(null);
  return (
    <div><h1>segundo componente</h1></div>
  )
}

export default RenderData2