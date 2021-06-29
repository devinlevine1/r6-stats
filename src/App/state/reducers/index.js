//Internal Imports
import { types } from "../types";

let initialState = {
  username: "",
  selection: "",
  hover: false,
  open: false,
  leaders: [],
  stats: [],
  isAuthenticated: false,
};

export default function current(state = initialState, action) {
  switch (action.type) {
    case types.SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case types.SET_SELECTION:
      return {
        ...state,
        username: action.payload,
      };
    case types.SET_HOVER:
      return {
        ...state,
        hover: !state.hover,
      };
    case types.SET_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    case types.SET_STATS:
      return {
        ...state,
        stats: action.payload,
      };
    case types.SET_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case types.SET_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
