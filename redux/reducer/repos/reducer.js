import { initialState } from '../../action/repos/state';
import { actionType } from '../../action/repos/type';

export const reposReducer = ( state = initialState, action ) => {
  switch(action.type){
    // Read
    case actionType.loadRepo:
      state = {
          ...state,
          reposList: action.payload,
      }
      return state
    case actionType.loadRepoResetData:
        return initialState
    default:
        return state
  }
}

export default reposReducer