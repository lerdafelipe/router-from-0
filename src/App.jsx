import React, { useEffect, useState } from 'react'
import About from './pages/About'
import Home from './pages/Home'

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('pushState', onLocationChange)
    window.addEventListener('popstate', onLocationChange)

    return () => {
      window.removeEventListener('pushState', onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  return (
    <div>
      {currentPath === '/' && <Home />}
      {currentPath === '/about' && <About />}
    </div>
  )
}

export default App
