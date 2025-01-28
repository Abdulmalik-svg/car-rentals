import React from 'react'

const Login = () => {
  return (
    <div id='demo1'>
      <p className="con1" >Log In</p>
     <input type="text" className='demo2'  placeholder='Email Address'/><br />
     <input type="text" className='demo2' placeholder='Password'/>
     <p className="con2">Remember Me</p>   <p id='cup1' className='con2'>Forgot Password</p><br />
     <br />
     <button id='cup2'>Log In</button>
    </div>
  )
}

export default Login
