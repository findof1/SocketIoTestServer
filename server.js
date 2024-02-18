import { Server } from "socket.io";
const io = new Server(9123, {
 cors:{
   origin:['http://localhost:3000']
 }
})

io.on('connection', socket =>{
 console.log(socket.id)
 socket.on('message', (msg)=>{
   console.log(msg)
   socket.broadcast.emit('received-msg', msg)
 })
})