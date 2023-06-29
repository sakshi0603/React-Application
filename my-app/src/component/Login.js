
import React, {useState}from 'react'
import './login.css'
import img from './image/logo.png'


export default function Login() {
const [user,setUser]=useState("")
const [password,setPassword]=useState("")
const [userErr,setUserErr]=useState("")
const [passErr,setPassErr]=useState("")


function loginHandle(e){
  if(user.length < 9 || password.length < 9){
    alert("invalid")
  } 
  else{
    alert ("You have successfully Logged in") 
  }
  e.preventDefault()
}

function userHandler(e){
  let item=e.target.value.length
  if(item <9){
    setUserErr(true) 
  }
  else{
    setUserErr(false)
  }
  setUser(item)
}

function passHandler(e){
  let item=e.target.value.length
  if(item <9){
    setPassErr(true) 
  }
  else{
    setPassErr(false)
  }
  setPassword(item)
}

  return (
    <>
    <body>
  <div className="img">
    <img src={img} alt=""/>
  </div>
  <div className="container">

    <div className="wrapper">
      <div className="title">
        <h3>Login </h3>

      </div>
      <p>Welcome to product name, Please login to your account</p>
      <form onSubmit={loginHandle}>
        <div className="row">

          <h3>College Id</h3>
          <i className="fa-solid fa-user"></i>
          <input  type="email" placeholder="id@pvppcoe.ac.in" onChange={userHandler} />
          {userErr?<label ><strong>Please enter right ID</strong></label>:""}
          
        </div>
        <div className="row">

          <h3>Password</h3>
          <i className="fa-solid fa-eye" id="eyeicon"></i>
          <input type="password" placeholder="Password"  onChange={passHandler} />
          {passErr?<label ><strong>Please enter right Password</strong></label>:""}
          
        </div>

        <div className="row button">
          <input type="submit" value="Login"/>

        </div>
        <footer>
          <a href="">www.getflytechnology.com</a>
        </footer>

      </form>
    </div>
  </div>
  <script src="valid.js"></script>


</body>
</>
  );
}

