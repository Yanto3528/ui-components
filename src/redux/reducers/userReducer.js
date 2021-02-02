import authTypes from "../types/authTypes";

const initialState = {
  user: null,
  loading: false,
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
