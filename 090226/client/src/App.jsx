import React from 'react'
import Login from './pages/Auth/Login'
import  { Toaster } from 'react-hot-toast';
import Register from './pages/Auth/Register'

const App = () => {
  return (
    <div>
      <Register/>
      <Login/>
      <Toaster/>
    </div>
  )
}

export default App
