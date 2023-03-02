import React, { useEffect, useState } from 'react'

const navigate = (href) => {
  window.history.pushState({}, '', href)
  // create a custom event
  const navigateEvent = new Event('pushState')
  window.dispatchEvent(navigateEvent)
}

const HomePage = () => {
  return (
    <main>
      <h1>This is our home page in a react router project</h1>
      <button onClick={() => navigate('/about')}>Go to About me</button>
    </main>
  )
}

const AboutPage = () => {
  return (
    <main>
      <h1>This is our About page, I am the better developer for your bussines</h1>
      <button onClick={() => navigate('/')}>Go to Home page</button>
    </main>
  )
}

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
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </div>
  )
}

export default App
