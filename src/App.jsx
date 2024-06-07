import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Dummy from './pages/dummy/dummy'
import Login from './pages/login/login'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/dummy" elemnt={<Dummy />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
