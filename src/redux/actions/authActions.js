import authTypes from "../types/authTypes";

// Register
export const register = async (data) => (dispatch) => {};
export const login = async (data) => (dispatch) => {};
export const logout = async () => (dispatch) => {};
export const setLoading = async () => (dispatch) =>
  dispatch({ type: authTypes.SET_LOADING });
