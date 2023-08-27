import React, { createContext, useReducer } from 'react'
import { Route,Routes } from 'react-router-dom'
import "./App.css"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Logout from './components/Logout'

import { initialState,reducer } from './reducer/UseReducer'


  // context API

export const UserContext = createContext();

const Routing =() => {

  return(
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/logout" element={<Logout/>} />
    </Routes>

  )
}

function App() {

  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <UserContext.Provider value={{state,dispatch}}>

      <Navbar/>
      {/* <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes> */}
      <Routing/>
      </UserContext.Provider>
    </div>
  )
}

export default App
