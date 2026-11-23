import { NavLink, Link } from 'react-router'
import Loginmenu from './Loginmenu'

const linkClass = ({ isActive }) =>
  isActive ? 'font-semibold text-primary' : 'text-subtext hover:text-primary'

function Navbar() {
  return (
    <nav className="flex h-18 items-center justify-between border-b border-line bg-white px-8 shadow-md">
      <Link to="/" className="text-2xl font-bold text-primary">
        QueueEase
      </Link>

      <div className="flex items-center gap-8">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/my-bookings" className={linkClass}>My Bookings</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        <Loginmenu/>
      </div>
    </nav>
  )
}

export default Navbar