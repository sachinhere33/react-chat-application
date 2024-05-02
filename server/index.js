const express = require("express")
const app = express()
const cors = require("cors")


const port = 4000;
const instance_of_cors = cors()
app.use(instance_of_cors)


const http = require("http").Server(app)

const socketio  = require("socket.io")(http,{
    cors:{origin:"https://chat-application-tawny-psi.vercel.app/"}
})

let users = []

socketio.on("connection",(socket)=>{
    console.log(`socket id: ${socket.id} user just connected`)

socket.on("newUser",(data)=>{
    console.log("new user came ")
    users.push(data)
    socketio.emit("newUserResponse",users)
    console.log(users)
})

socket.on("typing",(data)=> socket.broadcast.emit("typingResponse",data))



socket.on("message",(data)=>{
    console.log("data",data)
    socketio.emit("messageResponse",data)
})

    socket.on("disconnect",()=>{

users = users.filter((user)=>user.socketID !== socket.id)
socketio.emit("newUserResponse",users)
socket.disconnect()
        console.log("user is disconencted now ")
    })
})


app.get("/api",(req,res)=>{
 
    res.send({message:"hello world"})
})

http.listen(4000,()=>{
    console.log("sereve4r started , listening on port 4000")
})
