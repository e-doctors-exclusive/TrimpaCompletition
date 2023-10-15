const {instrument} = require("@socket.io/admin-ui")
const io = require("socket.io")(3000, {
  cors: {
    origin: ["http://localhost:8080","http://admin.socket.io"],
  },
});

const userIo = io.of("/user")
userIo.on("connection",socket =>{
    console.log("connected to user namespace with username" + socket.username);
})

userIo.use((socket,next) =>{
if(socket.handshake.auth.token){
    socket.username = getUsernameFromToken(socket.handshake.auth.token)
    next()
}else{
    next(new Error("Please send token"))
}
})

function getUsernameFromToken(token){
    return token
}

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("send-message", (message,room) => {
    if(room ===""){
    socket.broadcast.emit("recieve-message", message);
 }else{
    socket.to(room).emit("recieve-message", message);
 } 
});
  socket.on("join-room", (room,cb) => {
    socket.join(room);
    cb(`Joined ${room}`);
  });
  socket.on("ping",n => console.log(n)
});

instrument(io,{auth:false})
