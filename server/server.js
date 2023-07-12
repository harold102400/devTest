const express = require("express");
const WebSocket = require("ws");
const { connectToDatabase, saveDataToMongoDB } = require("./db");

const app = express();
const port = 3000;

const ws = new WebSocket(
  "wss://ws.bitmex.com/realtime?subscribe=instrument,orderBookL2_25:XBTUSD"
);

ws.on("error", console.error);

ws.on("open", () => {
  ws.send("something");
});

ws.on("message", async (data) => {
  console.log("received: %s", data);
  const newData = JSON.parse(data);
  const db = await connectToDatabase();
  await saveDataToMongoDB(db, [newData]);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
