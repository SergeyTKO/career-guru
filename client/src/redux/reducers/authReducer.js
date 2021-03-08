import { AUTH_SUCSESSFULLY, LOGOUT } from "../actionTypes";

const windowState = JSON.parse(window.localStorage.getItem("state"));
let preloadedState = {};
if (windowState) {
  preloadedState = {
    isAuth: windowState.auth.isAuth,
    user: windowState.auth.user,
  };
} else {
  preloadedState = { isAuth: false, user: { email: "", firstName: "" } };
}
const authReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case AUTH_SUCSESSFULLY:
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        user: { email: " ", username: " " },
      };
    default:
      return state;
  }
};

export default authReducer;
