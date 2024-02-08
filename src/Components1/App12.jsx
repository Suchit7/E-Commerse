import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Display from './Display'
import Home1 from './Home1'
import Login from './Login'
import Signup from './Signup'

function App12() {
  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" ><Home1/></Route>
      
        <Route path="/login" ><Login/></Route>
        <Route path="/signup" ><Signup/></Route>
        <Route path="/display" ><Display/></Route>
      </Switch>

    </BrowserRouter>
      
   
  )
}

export default App12
