import React, { useState } from 'react'

const HomePage = () => {
  return (
    <h1>This is our home page in a react router project</h1>
  )
}

const AboutPage = () => {
  return (
    <h1>This is our About page, I am the better developer for your bussines</h1>
  )
}

const App = () => {
  const [currentPath] = useState(window.location.pathname)

  return (
    <div>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </div>
  )
}

export default App
