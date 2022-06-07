import "./login.scss"

function Login() {
  return (
    <div className="login">
        <div className="top">
            <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/printful-afe3c.appspot.com/o/AlOo.png?alt=media&token=2f025dac-3077-4a43-8f92-9dfbc2c0e416"></img>
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input className="email" type="email" placeholder="Enter Email"></input>
                <input className="password" type="password" placeholder="Enter Password"></input>
                <button className="sinInButton">Sign In</button>
                <span>New to AlOo? <b>Sign up Now!</b></span>
                <small>
                    This Page is protected by Google reCAPTCHA to ensure you`re not a bot.<b>Learn More.</b>
                </small>
            </form>
        </div>
    </div>
  )
}

export default Login