
import { createContext } from 'react'

interface ContextProps {
  isOpenSideMenu: boolean,

  //Methods
  toggleSideMenu: () => void
}

export const UIContext = createContext({} as ContextProps)