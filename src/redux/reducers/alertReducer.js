import alertTypes from "../types/alertTypes";

export default (state = [], action) => {
  switch (action.type) {
    case alertTypes.SET_ALERT:
      return [...state, action.payload];
    case alertTypes.CLEAR_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};
