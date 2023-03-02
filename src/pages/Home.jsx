import { Link } from '../router/Link'

const Home = ({ nav }) => {
  return (
    <main>
      <h1>This is our home page in a react router project</h1>
      <Link to='/about'>Go to About me</Link>
    </main>
  )
}

export default Home
