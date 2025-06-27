import { useState } from 'react'
import './login.css'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* login form */}
    <div className="loginform">
    <div className="login">
         <img src="../img/logo3.jpg" alt="Logo" style={{width: "100px",height:'150px', padding: "10px 150px"}}/>
        <h1 style={{textAlign: "center", padding: "10px"}}>Login</h1>
        <form action="#" method="post">
            <label htmlfor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Username" required/><br/><br/>

            <label htmlfor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Password"/><br/>

            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="#">Register here</a></p>
    </div>
    </div>
 
    </>
  )
}

export default Login
