import axios from 'axios';

const SET_USER = 'SET_USER';

export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const fetchUser = (id) => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.get(`/api/users/${id}`, { headers: { admin: getState().auth.isAdmin, authorization: token } });
      dispatch(setUser(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}