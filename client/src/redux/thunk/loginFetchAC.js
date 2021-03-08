import { authSucsessAC, errorAC } from "../../redux/actionCreators";
import axios from "axios";

export const loginFetchAC = (email, password) => {
  return (dispatch) => {
    axios
      .post(process.env.REACT_APP_URL + "/login", {
        email: email.current.value,
        password: password.current.value,
      })
      .then((serverData) => {
        if (serverData.data.user) {
          window.localStorage.setItem("jwt", serverData.data.token);
          dispatch(authSucsessAC(serverData.data));
        } else {
          dispatch(errorAC(serverData.data.msg));
        }
      });
  };
};
