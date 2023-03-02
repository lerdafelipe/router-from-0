import About from './pages/About'
import E404 from './pages/E404'
import Home from './pages/Home'
import Search from './pages/Search'
import { Route } from './router/Route'
import Router from './router/Router'

const appRoutes = [
  {
    path: '/search/:query',
    Component: Search
  }
]

const App = () => {
  return (
    <div>
      <Router
        routes={appRoutes}
        defaultComponent={E404}
      >
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
      </Router>
    </div>
  )
}

export default App
