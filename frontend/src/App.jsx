import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import AppRouter from './routes/AppRouter.jsx'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
      offset: 40,
    })
  }, [])

  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
