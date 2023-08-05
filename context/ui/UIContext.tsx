
import { createContext } from 'react'

interface ContextProps {
  isOpenSideMenu: boolean,
  isOpenModal:    boolean

  //Methods
  toggleSideMenuOrModal: (toggleSideMenu: boolean) => void
}

export const UIContext = createContext({} as ContextProps)