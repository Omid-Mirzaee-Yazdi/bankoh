import { AuthUserContext } from 'contexts/userContext'
import { useContext } from 'react'

export const useAuth = () => useContext(AuthUserContext)
