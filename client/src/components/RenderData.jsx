import {useEffect, useState} from 'react'
import { throttle } from 'lodash'; 

function RenderData() {
    const [socketData, setSocketData] = useState(null);
  return (

    <div>
        <h1>primer componente</h1>
    </div>
  )
}

export default RenderData