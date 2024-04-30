import React from "react"
import {useState} from "react"
const ChatFooter = ({socket}) =>{
const [message,setMessage] = useState("")

const handletyping= () =>socket.emit("typing",`${localStorage.getItem("userName")} is typing `)


const handlesendmessage= (e) =>{
    e.preventDefault();
if (message.trim() && localStorage.getItem("userName")){

    socket.emit("message",{
        text :message,
        name:localStorage.getItem("userName"),
        id : `${socket.id}${Math.random()}`,
        socketID: socket.id,
    })}
    setMessage("")
} 










return (<>
    <div className="chat__footer">
        <form className="form" onSubmit={handlesendmessage}>
            <input type="text" placeholder="type message" value={message} onChange={(event)=>setMessage(event.target.value)} onKeyDown={handletyping} />
            <button className="sendbutton">send</button>
        </form>
    </div>
    </>
)
}
export default ChatFooter