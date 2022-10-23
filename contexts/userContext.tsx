import { useRouter } from 'next/router'
import { createContext, ReactNode, useCallback, useState } from 'react'
import useFirebaseAuth, { AuthUser } from 'hooks/useFirebaseAuth'
import { login, logout } from './authHelpers'
import routes from 'config/routes'
import config from 'config/config'
import { makeSafeCallbackPath } from 'utils/safeCallbackPath'

export interface AuthUserContextProps {
  authUser: AuthUser | null
  loading: boolean
  error: Error | null
  login: (callbackPath?: string) => void
  logout: () => void
}

// Context api to track login status
export const AuthUserContext = createContext<AuthUserContextProps>({
  authUser: null,
  loading: true,
  error: null,
  login: () => {},
  logout: () => {},
})

export interface AuthUserProviderProps {
  children?: ReactNode
}

export const AuthUserProvider = ({ children }: AuthUserProviderProps) => {
  const { authUser, loading } = useFirebaseAuth()
  const router = useRouter()
  const [error, setError] = useState<Error | null>(null)

  const handleLogin = useCallback(
    async (callbackPath?: string) => {
      const loginResponse = await login(config.allowedDomains)

      const safeCallbackPath = makeSafeCallbackPath(callbackPath) ?? routes.home

      if (loginResponse instanceof Error) {
        setError(loginResponse)
      } else {
        router.push(safeCallbackPath)
      }
    },
    [router]
  )

  const handleLogout = useCallback(() => {
    setError(null)
    logout()
    router.push(routes.root)
  }, [router])

  return (
    <AuthUserContext.Provider
      value={{
        authUser,
        error,
        loading,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  )
}
