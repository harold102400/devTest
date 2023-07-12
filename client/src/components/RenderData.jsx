import { useEffect, useState } from "react";
import { throttle } from "lodash";

function RenderData() {
  const [socketData, setSocketData] = useState(null);

  useEffect(() => {
    const socketURL = "wss://ws.bitmex.com/realtime?subscribe=instrument";
    const socket = new WebSocket(socketURL);

    const throttledsetSocketData = throttle((data) => {
      setSocketData(data);
    }, 10000);

    socket.onmessage = (message) => {
      const data = JSON.parse(message.data);
      throttledsetSocketData(data);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1 className="card-title">Datos recibidos:</h1>
      
      {socketData && socketData.data && (
        <div>
          {socketData.data.map((item, index) => (
            <div key={index}>
              <h2 className="card-subtitle">Símbolo: {item.symbol}</h2>
              {Object.entries(item).map(([key, value]) => (
                <p className="card-description" key={key}>
                  <strong>{key}: </strong> {value}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
}

export default RenderData;
