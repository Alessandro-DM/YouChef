/* eslint-disable no-case-declarations */
import axios from "axios";

const ADD_TO_HIRECART = "ADD_TO_HIRECART";
const REMOVE_FROM_HIRECART = "REMOVE_FROM_HIRECART";
const LOAD_FROM_USER = "LOAD_FROM_USER";
const EDIT_HIRECART = "EDIT_HIRECART";
const GET_ALL_HIRECARTS = "GET_ALL_HIRECARTS";

const _loadFromUser = (hireCart) => ({
  type: LOAD_FROM_USER,
  hireCart,
});

const _addToHireCart = (chef) => ({
  type: ADD_TO_HIRECART,
  chef: {
    id: chef.id,
    firstName: chef.firstName,
    lastName: chef.lastName,
    pricePerHour: chef.pricePerHour,
    foodType: chef.foodType,
    ratings: chef.ratings,
    city: chef.city,
    address: chef.address,
    state: chef.state,
    email: chef.email
  },
});

const _removeFromHireCart = (id) => ({
  type: REMOVE_FROM_HIRECART,
  id,
});

const _editHireCart = (chef) => ({
  type: EDIT_HIRECART,
  chef: {
    id: chef.id,
    firstName: chef.firstName,
    lastName: chef.lastName,
    pricePerHour: chef.pricePerHour,
    foodType: chef.foodType,
    ratings: chef.ratings,
    city: chef.city,
    address: chef.address,
    state: chef.state,
    email: chef.email
  },
});

const _getAllHireCarts = (hireCarts) => ({
  type: GET_ALL_HIRECARTS,
  hireCarts,
});

export const loadFromUser = () => {
  return async (dispatch, getState) => {
    const user = getState().auth.id;
    const token = localStorage.getItem("token");
    const { data } = await axios.get("/api/hireCart", {
      headers: {
        user,
        authorization: token,
      },
    });

    dispatch(_loadFromUser(data));
  };
};

export const addToHireCart = (chef) => {
  return async (dispatch, getState) => {
    if (getState().auth.id) {
      const user = getState().auth.id;

      const { data } = await axios.post(
        "/api/hireCart/",
        { chef },
        {
          headers: {
            user,
          },
        }
      );

      dispatch(_addToHireCart(data.chef));
    } else {
      const { data } = await axios.get(`/api/chefs/${chef.id}`);

      dispatch(_addToHireCart(data));
      localStorage.setItem("hireCart", JSON.stringify(getState().hireCart));
    }
  };
};

export const editHireCart = (chef) => {
  return async (dispatch, getState) => {
    if (getState().auth.id) {
      const user = getState().auth.id;

      const { data } = await axios.put(
        `/api/hireCart/${chef.id}`,
        { chef },
        {
          headers: {
            user,
          },
        }
      );

      dispatch(_editHireCart(data.chef));
    } else {
      const { data } = await axios.get(`/api/chefs/${chef.id}`);

      dispatch(_editHireCart(data));
      localStorage.setItem("hireCart", JSON.stringify(getState().hireCart));
    }
  };
};

export const removeFromCart = (id) => {
  return async (dispatch, getState) => {
    if (getState().auth.id > 0) {
      await axios.delete(`/api/hireCart/${id}`, {
        headers: {
          user: getState().auth.id,
        },
      });
      dispatch(_removeFromHireCart(id));
    } else {
      dispatch(_removeFromHireCart(id));

      localStorage.setItem("hireCart", JSON.stringify(getState().hireCart));
    }
  };
};


export const getAllHireCarts = () => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get("/api/hireCart/hireCarts", {
        headers: {
          id: getState().auth.id,
          authorization: token,
        },
      });
      dispatch(_getAllHireCarts(data));
    } catch (err) {
      console.error(err);
    }
  };
};

const cartLocalStorage = localStorage.getItem("hireCart") && localStorage.getItem("hireCart") !== "undefined" ? JSON.parse(localStorage.getItem("hireCart")) : [];


const initialState = cartLocalStorage;

export const hireCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HIRECART:
      console.log(state,'=========')
      const currentChef = state.find((item) => item.id === action.chef.id);

      if (currentChef) {
        return state.map((item) =>
          item.id === currentChef.id ? action.chef : item
        );
      }

      return [...state, action.chef];

    case REMOVE_FROM_HIRECART:
      return state.filter((item) => item.id !== action.id);

    case LOAD_FROM_USER:
      return action.cart;

    case EDIT_HIRECART:
      const existsInCart = state.find((item) => item.id === action.chef.id);
      return state.map((item) => (item.id === existsInCart.id ? action.chef : item));

    case GET_ALL_HIRECARTS:
      return action.hireCarts;

    default:
      return state;
  }
};
