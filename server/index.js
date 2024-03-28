import express, { urlencoded } from "express";
import cors from "cors";
import Conenectdb from "./db/Connectdb.js";
import UserRoute from "./Route/UserRoute.js";
// import ImageUpload from "./Try/image.js";
import { Server } from "socket.io";
import http from "http";
import MessageRoute from "./Route/MessageRoute.js";
const app = express();
const port = 4000;
console.clear();
// we need to connect our mongobd
Conenectdb();
// for parsing the  data of apllication we need to use the express.json()  middleware
// console.clear();
//If you are making a cross-origin request, make sure that the server you are trying to access allows requests from your domain. You might need to configure CORS headers on the server side.
app.use(cors());
app.use(express.json());
// const upload = multer({ dest: "uploads/" });
// app.use(multer);
//router jo ki user ka call lega thik
app.use("/api/auth/user", UserRoute);
// app.use("/user", ImageUpload);
app.use(express.urlencoded({ extended: true }));
app.use("/message", MessageRoute);
// app.use("/user", ImageUpload);
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

// we need to store the socket.id as well as user who is online now so that we can interacte frequently
const onlineusers = new Map();
io.on("connect", (socket) => {
  // console.log(socket.id);
  socket.on("add-user", (data) => {
    console.log(data, socket.id);
    // onlineuser.push();
    onlineusers.set(data, socket.id);
    // console.log(onlineusers);
    io.emit("onlineuser", Array.from(onlineusers.keys()));
  });
  socket.on("add-msg", (data) => {
    // console.log(data);
    // console.log(onlineusers);
    // console.log(data);
    const sender = onlineusers.get(data.receiver);
    // console.log(sender);
    if (sender) {
      io.to(sender).emit("msg-reciver", data.msg);
    }
  });
  socket.on("disconnect", () => {
    // Remove the disconnected user from the online users map
    let disconnectedUser;
    for (const [user, id] of onlineusers.entries()) {
      if (id === socket.id) {
        disconnectedUser = user;
        onlineusers.delete(user);
        break;
      }
    }
    // Emit updated online user list
    if (disconnectedUser) {
      io.emit("onlineuser", Array.from(onlineusers.keys()));
    }
  });
});

server.listen(port, () => {
  console.log("Server is running on port 4000");
});

//hum multer use karta hai taki form data ko read kar sakta node js
// Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files
