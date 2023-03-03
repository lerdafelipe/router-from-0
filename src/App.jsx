import { lazy, Suspense } from 'react'
import { Route } from './router/Route'
import Router from './router/Router'
const About = lazy(() => import('./pages/About'))
const Home = lazy(() => import('./pages/Home'))
const Search = lazy(() => import('./pages/Search'))
const E404 = lazy(() => import('./pages/E404'))

const appRoutes = [
  {
    path: '/about',
    Component: About
  },
  {
    path: '/search/:query',
    Component: Search
  }
]

const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Router
          routes={appRoutes}
          defaultComponent={E404}
        >
          <Route path='/' Component={Home} />
          <Route path='/:lang/about' Component={About} />
        </Router>
      </Suspense>
    </div>
  )
}

export default App
