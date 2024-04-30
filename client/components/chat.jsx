// chat header 
// chat body 
// chat footer 
import React, { useEffect, useState ,useRef} from "react"
import ChatHeader from "./ChatHeader.jsx"
import ChatBody from "./ChatBody.jsx"
import ChatFooter from "./ChatFooter.jsx"
const ChatPage = ({socket})=>{
    const [message,setMessage] =  useState([])
    const [typingstatus,setTypingStatus] =  useState("")
    const lastMessageRef = useRef(null)
    useEffect(()=>{
        socket.on("messageResponse",(data)=>setMessage([...message,data]))
    },[socket,message])



    useEffect(()=>{
        socket.on("typingResponse",(data)=>setTypingStatus(data))
    },[socket])




    useEffect(()=>{
        lastMessageRef.current?.scrollIntoView({behaviour:"smooth"},[message])
    },[socket])

    return (
        <div className="chat">
            <ChatHeader socket={socket}/>
            <div className="bodyandfooter">
                <ChatBody message={message} typingstatus={typingstatus} lastMessageRef = {lastMessageRef}/>
                <ChatFooter socket={socket}/>
            </div>
        </div>
    )
}
export default ChatPage;
