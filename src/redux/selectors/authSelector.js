import { createSelector } from "reselect";

const selectUserState = (state) => state.user;

export const selectUser = createSelector(selectUserState, (user) => user.user);

export const selectLoading = createSelector(
  selectUserState,
  (user) => user.loading
);
