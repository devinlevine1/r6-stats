// Internal Imports
import { types } from "../types";

export const setUsername = (username) => ({
  type: types.SET_USERNAME,
  payload: username,
});

export const setHover = (hover) => ({
  type: types.SET_HOVER,
  payload: hover,
});

export const setStats = (stats) => ({
  type: types.SET_STATS,
  payload: stats,
});

export const setOpen = (open) => ({
  type: types.SET_OPEN,
  payload: open,
});

export const setSelection = (selection) => ({
  type: types.SET_SELECTION,
  payload: selection,
});

export const setLeaders = (leaders) => ({
  type: types.SET_LEADERS,
  payload: leaders,
});

export const setLogin = () => ({
  type: types.SET_LOGIN,
});

export const setLogout = () => ({
  type: types.SET_LOGOUT,
});
