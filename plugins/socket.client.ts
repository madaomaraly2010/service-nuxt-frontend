import { io } from "socket.io-client";

export default defineNuxtPlugin((nuxtApp) => {
  const socket = io("http://localhost:4000"); // Replace with your backend URL
  socket.on("connect", () => {
    console.log("✅ Socket.IO Connected:", socket.id);
  });

  socket.on("connect_error", (error) => {
    console.error("❌ Socket Connection Error:", error);
  });
  nuxtApp.provide("socket", socket);
});
