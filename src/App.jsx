import About from './pages/About'
import E404 from './pages/E404'
import Home from './pages/Home'
import Router from './router/Router'

const appRoutes = [
  {
    path: '/',
    Component: Home
  }, {
    path: '/about',
    Component: About
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
