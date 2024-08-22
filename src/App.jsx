import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './component/Header'



function App() {
  
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/About' element={<About />} />

      </Routes>
      <div>
          <h3 className="read-the-docs">Tout est Ok</h3>
      </div>
    </BrowserRouter>
    
    
  )
}

export default App
