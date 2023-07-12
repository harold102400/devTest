const express = require('express')
const WebSocket = require('ws')

const app = express();
const port = 3000;

const ws = new WebSocket('wss://ws.bitmex.com/realtime?subscribe=instrument,orderBookL2_25:XBTUSD');

ws.on('error', console.error);

ws.on('open', () =>{
    ws.send('something')
})

ws.on('message', (data) => {
    console.log('received: ', data)
    const newData = JSON.parse(data)
})


app.listen(port, () =>{
 console.log(`listening on port ${port}`)
})