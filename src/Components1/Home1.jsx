 import React from 'react'
import { Link } from 'react-router-dom'

function Home1() {
  return (
    <div>

    <Link to={"/login"}><button>Login</button></Link>
    <Link to={"/signup"}><button>Sign Up</button></Link>
    <Link to={"/display"}><button>Display</button></Link>
      
    </div>
  )
}

export default Home1
