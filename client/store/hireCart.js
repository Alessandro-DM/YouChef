/* eslint-disable no-case-declarations */
import axios from "axios";

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const LOAD_FROM_USER = "LOAD_FROM_USER";
const EDIT_CART = "EDIT_CART";
const GET_ALL_ORDERS = "GET_ALL_ORDERS";

const _loadFromUser = (cart) => ({
  type: LOAD_FROM_USER,
  cart,
});

const _addToCart = (product, qty) => ({
  type: ADD_TO_CART,
  product: {
    id: product.id,
    name: product.name,
    imageURL: product.imageURL,
    price: product.price,
    inventory: product.inventory,
    qty,
  },
});

const _removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

const _editCart = (product, qty) => ({
  type: EDIT_CART,
  product: {
    id: product.id,
    name: product.name,
    imageURL: product.imageURL,
    price: product.price,
    inventory: product.inventory,
    qty,
  },
});

const _getAllOrders = (orders) => ({
  type: GET_ALL_ORDERS,
  orders,
});

export const loadFromUser = () => {
  return async (dispatch, getState) => {
    const user = getState().auth.id;
    const token = localStorage.getItem("token");
    const { data } = await axios.get("/api/cart", {
      headers: {
        user,
        authorization: token,
      },
    });

    dispatch(_loadFromUser(data));
  };
};

export const addToCart = (product, qty) => {
  return async (dispatch, getState) => {
    if (getState().auth.id) {
      const user = getState().auth.id;

      const { data } = await axios.post(
        "/api/cart/",
        { product, qty },
        {
          headers: {
            user,
          },
        }
      );

      dispatch(_addToCart(data.product, qty));
    } else {
      const { data } = await axios.get(`/api/products/${product.id}`);

      dispatch(_addToCart(data, qty));
      localStorage.setItem("cart", JSON.stringify(getState().cart));
    }
  };
};

export const editCart = (product, qty) => {
  return async (dispatch, getState) => {
    if (getState().auth.id) {
      const user = getState().auth.id;

      const { data } = await axios.put(
        `/api/cart/${product.id}`,
        { product, qty },
        {
          headers: {
            user,
          },
        }
      );

      dispatch(_editCart(data.product, qty));
    } else {
      const { data } = await axios.get(`/api/products/${product.id}`);

      dispatch(_editCart(data, qty));
      localStorage.setItem("cart", JSON.stringify(getState().cart));
    }
  };
};

export const removeFromCart = (id) => {
  return async (dispatch, getState) => {
    if (getState().auth.id > 0) {
      await axios.delete(`/api/cart/${id}`, {
        headers: {
          user: getState().auth.id,
        },
      });
      dispatch(_removeFromCart(id));
    } else {
      dispatch(_removeFromCart(id));

      localStorage.setItem("cart", JSON.stringify(getState().cart));
    }
  };
};


export const getAllOrders = () => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("token");
      // const id = getState().auth.id;
      // console.log(id);
      const { data } = await axios.get("/api/cart/orders", {
        headers: {
          id: getState().auth.id,
          authorization: token,
        },
      });
      dispatch(_getAllOrders(data));
    } catch (err) {
      console.error(err);
    }
  };
};

const cartLocalStorage = localStorage.getItem("cart") && localStorage.getItem("cart") !== "undefined" ? JSON.parse(localStorage.getItem("cart")) : [];


const initialState = cartLocalStorage;

export const hireCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.find((item) => item.id === action.product.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === existingItem.id ? action.product : item
        );
      }

      return [...state, action.product];

    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.id);

    case LOAD_FROM_USER:
      return action.cart;

    case EDIT_CART:
      const existsInCart = state.find((item) => item.id === action.product.id);
      return state.map((item) => (item.id === existsInCart.id ? action.product : item));

    case GET_ALL_ORDERS:
      return action.orders;

    default:
      return state;
  }
};
