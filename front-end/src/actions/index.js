import axios from 'axios';

export const FETCHING_KID_DATA = 'FETCHING_KID_DATA ';
export const FETCH_KID_SUCCESS = 'FETCH_KID_SUCCESS';
export const FETCH_KID_FAIL = 'FETCH_KID_FAIL';


export const getData = () => 
  dispatch => { 
    dispatch({type: FETCH_KID_DATA});
    axios
    .post('')
    .then(res=> {
      dispatch({type: FETCH_KID_SUCCESS, payload: res.data})
    })
    .catch(err=> { 
      dispatch({type: FETCH_KID_FAIL, payload: err})
    });
};
