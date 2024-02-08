import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className='loginBox'>
      <div className="row">
        <Link to={"/user"}><button className='btn'>User</button></Link>
        <Link to={"/admin"}><button className='btn'>Admin</button></Link>

      </div>
    </div>
  )
}

export default Login
