import axios from 'axios';
import { API_BASE_URL } from '../../../config/AppConfig';
import { actionType } from '../../action/repos/type';

// Read
export const getListRepos = () => {
  return (dispatch) => {
    return axios.get(API_BASE_URL + '/repos').then(response => {
      if(response.data) {
        dispatch(saveListRepos(response.data))
      };
    });
  };
};

// Read
export const saveListRepos = (payload) => {
  return {
      type: actionType.loadRepo,
      payload: payload
  };
};