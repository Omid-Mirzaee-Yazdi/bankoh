import { useAuth } from 'hooks/useAuth'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { greet } from 'utils/greet'

export interface GlobalState {
  greeting: string
}

export type GlobalStateContextProps = [
  GlobalState,
  Dispatch<SetStateAction<GlobalState>>
]
const initialState = {
  greeting: '',
  blurPlans: true,
  showTopLevelPlansOnly: true,
  plans: [],
  pages: [],
}

export const GlobalStateContext = createContext<GlobalStateContextProps>([
  initialState,
  () => {},
])

export interface GlobalStateProviderProps {
  children: React.ReactNode
}

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const [state, setState] = useState<GlobalState>(initialState)
  const { authUser } = useAuth()


  useEffect(() => {
    if (authUser?.name) {
      const greeting = greet(authUser.name)
      setState((prev) => ({ ...prev, greeting }))
    }
  }, [authUser?.name])

  return (
    <GlobalStateContext.Provider value={[state, setState]}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export const useGlobalState = () => useContext(GlobalStateContext)
