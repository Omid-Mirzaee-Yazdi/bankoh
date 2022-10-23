import routes from 'config/routes'
import { useAuth } from 'hooks/useAuth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export interface AuthenticatedPageProps {
  children?: React.ReactNode
}

const AuthenticatedPage = ({ children }: AuthenticatedPageProps) => {
  const { authUser, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!authUser && !loading) {
      router.push(`${routes.login}?callbackPath=${router.pathname}`)
    }
  }, [authUser, loading, router])

  return <>{authUser && !loading && children}</>
}

export default AuthenticatedPage
