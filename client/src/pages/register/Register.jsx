import { useRef, useState } from "react"
import "./register.scss"

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
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"/>
                <button className="loginButton">Sign In</button>
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