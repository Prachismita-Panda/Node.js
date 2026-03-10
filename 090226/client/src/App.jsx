import React from 'react'
import Login from './pages/Auth/Login'
import  { Toaster } from 'react-hot-toast';
import Register from './pages/Auth/Register'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import TodoList from './pages/Todos/TodosList';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About'



const App = () => {
  return (
    <div>
      
      <Toaster/>

      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/todo' element={<TodoList/>} />
        <Route path='/landing' element={<Landing/>} />
        <Route path='/about' element={<About/>} />
        
      </Routes>

      
    </div>
  )
}

export default App
