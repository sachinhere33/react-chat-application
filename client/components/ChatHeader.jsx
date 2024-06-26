import React,{useEffect, useState} from "react"
const ChatHeader = ({socket}) => {
    const [users,setUsers] = useState([])
useEffect(()=>{
    socket.on("newUserResponse",(data)=>setUsers(data))
    
},[socket,users])

console.log(users)
    return (
        <div className="chat__sidebar">
            <h2>open chat</h2>
            <div>
                <h4 className="chat__header">acitve users</h4>
                <div className="chat__users">
                   
{users.map((user)=>(<p key={user.socketID}>{user.userName}</p>))}





                </div>
            </div>
        </div>
    )
}
export default ChatHeader
