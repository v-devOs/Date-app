import { UIState } from './';

type UIActionType = 
| { type: '[UI] - Toggle Side Menu' } 

export const uiReducer = ( state: UIState, action: UIActionType ): UIState => {
  
  switch (action.type) {
    case '[UI] - Toggle Side Menu':
      return{
        ...state,
        isOpenSideMenu: !state.isOpenSideMenu
      }


    default:
      return state;
  }
}