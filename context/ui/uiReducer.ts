import { UIState } from './';

type UIActionType = 
| { type: '[UI] - Toggle Side Menu' } 
| { type: '[UI] - Toggle Modal'}

export const uiReducer = ( state: UIState, action: UIActionType ): UIState => {
  
  switch (action.type) {
    case '[UI] - Toggle Side Menu':
      return{
        ...state,
        isOpenSideMenu: !state.isOpenSideMenu
      }
    
    case '[UI] - Toggle Modal':
      return{
        ...state,
        isOpenModal: !state.isOpenModal
      }

    default:
      return state;
  }
}