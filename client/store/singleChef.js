import axios from "axios";

const FETCH_CHEF = "FETCH_CHEF";

export const _fetchChef = (chef) => ({
  type: FETCH_CHEF,
  chef,
});

export const fetchChef = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/chefs/${id}`);
      dispatch(_fetchChef(data));
    } catch (err) {
      console.error(err);
    }
  };
};

const initalState = {};

export const chefReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_CHEF:
      return action.chef;
    default:
      return state;
  }
};
