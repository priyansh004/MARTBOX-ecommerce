import React from 'react'

const SignupPage = () => {
  return (
    <>
      <div className="box">
        <span className="borderLine" />
        <form>
          <h2 className="text-2xl">Sign Up</h2>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Email</span>
            <i />
          </div>
          <div className="inputBox">
            <input type="password" required="required" />
            <span>Password</span>
            <i />
          </div>
          <div className="links">
            <a href="#">Forgot Password</a>
            <a href="#">Login</a>
          </div>
          <input type="submit" defaultValue="Login" />
        </form>
      </div>
      <p />
    </>
  )
}

export default SignupPage
