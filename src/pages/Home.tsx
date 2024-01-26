import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react'
import Header from '../components/Header'

function Home() {
  return (
    <>
      <Header />
      <Link to={'/movies'}>
        <Text>Lista film e serie tv</Text>
      </Link>
    </>
  )
}

export default Home
