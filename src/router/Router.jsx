import { useState, useEffect, Children } from 'react'
import { match } from 'path-to-regexp'

export default function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => null }) {
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

  let routeParams = {}

  const routesFromChildrens = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })

  const routesConcated = routes.concat(routesFromChildrens)

  const ToRender = routesConcated.find(({ path }) => {
    if (path === currentPath) return true

    const matcherURL = match(path, { decode: decodeURIComponent })
    const matched = matcherURL(currentPath)
    if (!matched) return false

    routeParams = matched.params
    return true
  })?.Component

  return ToRender
    ? <ToRender routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}
