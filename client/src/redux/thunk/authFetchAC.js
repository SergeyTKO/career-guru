import { authSucsessAC, errorAC } from "../../redux/actionCreators";
import axios from "axios";

export const authFetchAC = (
  email,
  password,
  firstName,
  lastName,
  checkPsw,
  secretKey
) => {
  return (dispatch) => {
    axios.post(`${process.env.REACT_APP_URL}/auth`, {
        email: email.current.value,
        password: password.current.value,
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        checkPsw: checkPsw.current.value,
        secretKey: secretKey.current.value,
      })

      .then((serverData) => {
        if (serverData.data.user) {
          dispatch(authSucsessAC(serverData.data));
          window.localStorage.setItem("jwt", serverData.data.token);
        }
        dispatch(errorAC(serverData.data.msg));
      });
  };
};
