import About from './pages/About'
import E404 from './pages/E404'
import Home from './pages/Home'
import Search from './pages/Search'
import Router from './router/Router'

const appRoutes = [
  {
    path: '/',
    Component: Home
  }, {
    path: '/about',
    Component: About
  }, {
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
      />
    </div>
  )
}

export default App
