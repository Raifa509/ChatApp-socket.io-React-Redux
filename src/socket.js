import { io } from "socket.io-client";

export const socket = io("https://chatapp-backend-1-24i9.onrender.com", {
  transports: ["websocket", "polling"],
});
