import { v4 } from "uuid";
import alertTypes from "../types/alertTypes";

// Set alert and remove it after x seconds
export const setAlert = (message, type, duration = 3000) => (dispatch) => {
  const alert = {
    id: v4(),
    message,
    type,
  };
  dispatch({ type: alertTypes.SET_ALERT, payload: alert });

  setTimeout(
    () => dispatch({ type: alertTypes.CLEAR_ALERT, payload: alert.id }),
    duration
  );
};
