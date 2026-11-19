import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import MyBookings from './pages/MyBookings'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Forgotpassword from './pages/Forgotpassword'

function App() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />
      <main className="mx-auto max-w-1200 px-8 py-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgotpassword' element={<Forgotpassword/>}/>
      </Routes>
    </main>
    </div >
  )
}

export default App