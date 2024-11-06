import { useEffect, useState } from "react";
import io from "socket.io-client";

/**
 * WebSocket hook to connect to Python Socket. It creates a 'WebSocket' connection to the server and returns the socket instance to be consistently used, otherwise, the socket will create new instances for each component. When the component unmounts, the WebSocket connection is closed.
 * @param {string} url - The URL of the server
 * @param {Function} handleData - Function callback to handle the data received from the server
 * @returns {WebSocket} - The socket.io instance (not WebSocket)
 */

export default function useWebSocket(url, handleData) {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const socketClient = io(url);

    socketClient.on("connect", () => {
      console.log("Connected to the server");
    });

    socketClient.on("disconnect", () => {
      console.log("Disconnected from the server");
    });

    socketClient.on("incoming_message", (data) => {
      handleData(data);
    });

    setSocket(socketClient);

    return () => {
      socketClient.close();
    };
  }, []);

  return socket;
}
