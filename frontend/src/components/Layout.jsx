import { AnimatePresence } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import ScrollProgress from './ScrollProgress.jsx'

function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          <Outlet />
        </div>
      </AnimatePresence>
    </div>
  )
}

export default Layout
