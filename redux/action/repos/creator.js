import axios from 'axios';
import { API_BASE_URL } from '../../../config/AppConfig';
import { actionType } from '../../action/repos/type';

// Read
export const getListRepos = () => {
    // console.log('action.user getListRepos')
    return (dispatch) => {
        // console.log('dispatch getListRepos')
        return axios.get(API_BASE_URL + '/repos').then(response => {
            // console.log('axios getListRepos', response.data)
            if(response.data) {
                dispatch(saveListRepos(response.data))
            }
        })
    }
};

// Read
export const saveListRepos = (payload) => {
  return {
      type: actionType.loadRepo,
      payload: payload
  };
};