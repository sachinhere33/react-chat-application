import React from "react"
const ChatHeader = () => {
    return (
        <div className="chat__sidebar">
            <h2>open chat</h2>
            <div>
                <h4 className="chat__header">online users</h4>
                <div className="chat__users">
                    <p>user 1</p>
                    <p>user 2</p>
                    <p>user 3</p>
                    <p>user 4</p>
                </div>
            </div>
        </div>
    )
}
export default ChatHeader