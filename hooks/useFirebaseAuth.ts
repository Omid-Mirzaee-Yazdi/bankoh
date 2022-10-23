import { User } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { auth } from 'config/firebase'
import { getUserAccessLevel } from 'utils/Auth'

export interface AuthUser {
  uid: string
  email: string | null
  name: string | null
}

//map user object
const formatAuthUser = (user: User): AuthUser => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
})

//custom hook to track loading and login status
const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  const authStateChanged = async (authState: User | null) => {
    if (!authState) {
      setAuthUser(null)
      setLoading(false)
      return
    }


    const formattedUser = formatAuthUser(authState)
    setAuthUser(formattedUser)
    setLoading(false)
  }

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged)
    return () => unsubscribe()
  }, [])

  return {
    authUser,
    loading,
  }
}

export default useFirebaseAuth
