import { useState, useEffect } from 'react'

export default function Router ({ routes = [], defaultComponent: DefaultComponent = () => null }) {
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

  const ToRender = routes.find(route => route.path === currentPath)?.Component

  return ToRender ? <ToRender /> : <DefaultComponent />
}
