import "./login.scss"

function Login() {
  return (
    <div className="login">
        <div className="top">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"></img>
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input className="email" type="email" placeholder="Enter Email"></input>
                <input className="password" type="password" placeholder="Enter Password"></input>
                <button className="sinInButton">Sign In</button>
                <span>New to Netflix? <b>Sign up Now!</b></span>
                <small>
                    This Page is protected by Google reCAPTCHA to ensure you`re not a bot.<b>Learn More.</b>
                </small>
            </form>
        </div>
    </div>
  )
}

export default Login