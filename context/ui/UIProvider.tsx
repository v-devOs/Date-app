import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from './';

interface Props {
  children: ReactNode
}

export interface UIState {
  isOpenSideMenu: boolean;
  isOpenModal:    boolean
}

const UI_INITIAL_STATE : UIState = {
  isOpenSideMenu: false,
  isOpenModal:    true
}

export const UIProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const toggleSideMenuOrModal = ( toggleSideMenu: boolean) => {
    
    toggleSideMenu 
      ? dispatch({type: '[UI] - Toggle Side Menu'}) 
      : dispatch({type: '[UI] - Toggle Modal'})
  }

  return (
    <UIContext.Provider value={{
      ...state,

      // Methods

      toggleSideMenuOrModal
    }}>
    { children }
    </UIContext.Provider>
  )
}