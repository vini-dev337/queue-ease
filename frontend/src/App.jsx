import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import MyBookings from './pages/MyBookings'

function App() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App