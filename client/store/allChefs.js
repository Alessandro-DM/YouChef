// import axios from "axios";

// const FETCH_CHEFS = "FETCH_CHEFS";
// const ADD_CHEF = "ADD_CHEF";
// const EDIT_CHEF = "EDIT_CHEF";
// const DELETE_CHEF = "DELETE_CHEF";

// const _fetchChefs = (chefs) => ({
//   type: FETCH_CHEFS,
//   chefs,
// });

// const _addChef = (chef) => ({
//   type: ADD_CHEF,
//   chef,
// });

// const _editChef = (chef) => ({
//   type: EDIT_CHEF,
//   chef,
// });

// const _deleteChef = (chef) => ({
//   type: DELETE_CHEF,
//   chef,
// });

// export const fetchChefs = () => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get("/api/chefs");
//       dispatch(_fetchChefs(data));
//     } catch (err) {
//       console.error(err);
//     }
//   };
// };

// export const addChef = (chef, history) => {
//   return async (dispatch) => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log(token);
//       const { data: newChef } = await axios.post("/api/chefs", { token, chef });
//       dispatch(_addChef(newChef));
//     } catch (err) {
//       console.error(err);
//     }
//     history.push("/admin");
//   };
// };

// export const editChef = (chef, history) => {
//   return async (dispatch) => {
//     const token = localStorage.getItem("token");
//     const { data: updated } = await axios.put(`/api/chefs/${chef.id}`, { token, chef });
//     dispatch(_editChef(updated));
//     history.push("/admin");
//   };
// };

// export const deleteChef = (id, history) => {
//   return async (dispatch) => {
//     const token = localStorage.getItem("token");
//     const { data: chef } = await axios.delete(`/api/chefs/${id}`, { token, chef });
//     dispatch(_deleteChef(chef));
//     history.push("/admin");
//   };
// };

// const initalState = [];

// export const chefsReducer = (state = initalState, action) => {
//   switch (action.type) {
//     case FETCH_CHEFS:
//       return action.chefs;
//     case ADD_CHEF:
//       return [...state, action.chef];
//     case EDIT_CHEF:
//       return state.map((chef) => {
//         return chef.id === action.chef.id ? action.chef : chef;
//       });
//     case DELETE_CHEF:
//       return state.filter((chef) => chef.id !== action.chef.id);
//     default:
//       return state;
//   }
// };

import axios from "axios";

const FETCH_CHEFS = "FETCH_CHEFS";
const ADD_CHEF = "ADD_CHEF";
const EDIT_CHEF = "EDIT_CHEF";
const DELETE_CHEF = "DELETE_CHEF";

const _fetchChefs = (chefs) => ({
  type: FETCH_CHEFS,
  chefs,
});

const _addChef = (chef) => ({
  type: ADD_CHEF,
  chef,
});

const _editChef = (chef) => ({
  type: EDIT_CHEF,
  chef,
});

const _deleteChef = (chef) => ({
  type: DELETE_CHEF,
  chef,
});

export const fetchChefs = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/chefs");
      dispatch(_fetchChefs(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const addChef = (chef, history) => {
  return async (dispatch) => {
    try {
      const { data: newChef } = await axios.post("/api/chefs", chef );
      dispatch(_addChef(newChef));
    } catch (err) {
      console.error(err);
    }
    history.push("/");
  };
};

export const editChef = (chef, history) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(`/api/chefs/${chef.id}`, chef );
    dispatch(_editChef(updated));
    history.push("/");
  };
};

export const deleteChef = (id, history) => {
  return async (dispatch) => {
    const { data: chef } = await axios.delete(`/api/chefs/${id}`, chef );
    dispatch(_deleteChef(chef));
    history.push("/");
  };
};

const initalState = [];

export const chefsReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_CHEFS:
      return action.chefs;
    case ADD_CHEF:
      return [...state, action.chef];
    case EDIT_CHEF:
      return state.map((chef) => {
        return chef.id === action.chef.id ? action.chef : chef;
      });
    case DELETE_CHEF:
      return state.filter((chef) => chef.id !== action.chef.id);
    default:
      return state;
  }
};

