import { useRef, useState } from "react"
import "./register.scss"
import {Link} from "react-router-dom"

function Register() {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart=()=>{
        setEmail(emailRef.current.value)
    }

    const handleFinish=()=>{
        setPassword(passwordRef.current.value)
    }

  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
                <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/printful-afe3c.appspot.com/o/AlOo.png?alt=media&token=2f025dac-3077-4a43-8f92-9dfbc2c0e416"/>
                <Link to="/login" className="link"> <button className="loginButton">Sign In</button> </Link>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited Movies, TV shows and More!</h1>
            <h2>Watch Anywhere, Cancel Anytime.</h2>
            <p>Ready to watch! Enter your email to create or restart your membership.</p>
            {!email ? (
                <div className="input">
                    <input type="email" placeholder="Email Address" ref={emailRef}></input>
                    <button className="registerButton" onClick={handleStart}>Get Started</button>
                </div>
            ) : (
                <div className="input">
                    <input type="password" placeholder="Password" ref={passwordRef}></input>
                    <button className="registerButton" onClick={handleFinish}>Start</button>
                </div>
            )}
        </div>
    </div>
  )
}

export default Register