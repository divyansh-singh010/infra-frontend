import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Dummy from './pages/dummy/dummy'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dummy" elemnt={<Dummy />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
