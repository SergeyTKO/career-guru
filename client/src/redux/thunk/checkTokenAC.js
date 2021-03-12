import { logoutAC } from "../actionCreators";
import axios from "axios";
export const checkTokenAC = () => {
  const token = window.localStorage.getItem("jwt");
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_URL}/auth/checktoken`, {
        token: token,
      })
      .then((data) => (!data.data.success ? null : dispatch(logoutAC())));
  };
};
