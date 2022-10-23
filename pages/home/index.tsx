import Dashboard from 'components/Dashboard/Dashboard'
import { logout } from 'contexts/authHelpers'
import { useAuth } from 'hooks/useAuth'

const Page = () => {
  const {authUser} = useAuth()
  return (
    <Dashboard>
      hello {authUser?.name}
      <button onClick={() => logout()}>logout</button>
    </Dashboard>
  )
}

export default Page
