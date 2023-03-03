import { describe, it, expect, beforeEach, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Router } from './Router.jsx'
import { Route } from './Route.jsx'
import { Link } from './Link.jsx'
import { getCurrentPath } from '../utils.js'

vi.mock('../utils.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('Should render 404 if not match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('Should return the first route that match', () => {
    getCurrentPath.mockReturnValue('/about')
    const routes = [{
      path: '/about',
      Component: () => <h1>About</h1>
    }, {
      path: '/about',
      Component: () => <h1>About 2</h1>
    }]

    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })

  it('Should can navigate with the component Link', async () => {
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <Router>
        <Route
          path='/'
          Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to='/about'>Go to about Page</Link>
              </>
            )
          }}
        />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>
    )

    const button = screen.getByText('Go to about Page')
    fireEvent.click(button)

    const aboutTitle = await screen.findByText('About')
    expect(aboutTitle).toBeTruthy()
  })
})
