import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
const Home = ({socket}) => {
    const navigate = useNavigate()
    const [userName, setUsername] = useState("")







    const handleSubmit = (e) => {
        console.log("reached here ")
        //will handle when form is submitted 
        e.preventDefault();

        localStorage.setItem("userName", userName)

socket.emit("newUser",{userName,socketId:socket.id})

        navigate("/chat")

    }
    return (
        <>
            <form className="home_container" onSubmit={handleSubmit}>
                <h1 className="form_header">sign in form</h1>

                <label htmlFor="username"> username</label>
                <input type="text" name="username" id="username" className="username_input" value={userName} onChange={(event) => setUsername(event.target.value)} />
                <button className="submit_button">Sign in </button>
            </form>
        </>
    )
}
export default Home
