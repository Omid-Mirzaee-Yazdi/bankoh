import type { NextPage } from 'next'
import routes from 'config/routes'

// This gets called on every request
export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: routes.home,
      permanent: false,
    },
  }
}

const Home: NextPage = () => {
  return <></>
}

export default Home
