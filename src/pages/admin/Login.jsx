import React from 'react'

const Login = () => {
  return (
    <div className='login-container'>
        <div className="box">
            <span className="borderLine" />
            <form action="">
            <h2>Sign in</h2>
            <div className="inputBox">
            <input type="text" required="" />
            <span>Username</span>
            <i />
            </div>
            <div className="inputBox">
                <input type="password" required="" />
                <span>Password</span>
                <i />
            </div>
            <div className="links">
                <a href="#">Forgot Password</a>
                <a href="#">Signup</a>
            </div>
                <input type="submit" id="submit" defaultValue="Login" />
        </form>
        </div>
    </div>

  )
}

export default Login