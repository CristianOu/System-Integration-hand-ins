import express from "express";
import http from "http";
import "dotenv/config";

const app = express();
const server = http.createServer(app);

app.use(express.static("public"));

import { Server } from "socket.io";
const io = new Server(server);

const users = [
  {id: "1", username: "name1", status: "not reg"}, 
  {id: "2", username: "name2", status: "not reg"}
];

io.on("connection", (socket) => {
  socket.on("callUsers", () => {
    socket.emit("sendUsers", users);
  });

  socket.on("validateUser", (username) => {
    users.map(user => {
      if (user.username === username) {
        user.status = "on";
        user.connectionId = socket.id;
        io.emit("changeStatus", user);
      }
    });
  });

  socket.on("disconnect", () => {
    users.map(user => {
      if (user.connectionId && user.connectionId === socket.id) {
        user.status = "off";
        io.emit("changeStatus", user);
      }
    })
  });
})

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log('Server is running on port', PORT);
})

