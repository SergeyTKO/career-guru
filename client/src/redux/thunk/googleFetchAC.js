import { authSucsessAC, errorAC } from "../../redux/actionCreators";
import axios from "axios";

export const googleFetchAC = () => {
  return (dispatch) => {
    fetch(process.env.REACT_APP_URL + "/auth/google", {
      mode: "no-cors",
      method: "get",
      credentials: 'include' 
    }).then((serverData) => {
      return serverData
      // if (serverData.data.user) {
      //   window.localStorage.setItem("jwt", serverData.data.token);
      //   dispatch(authSucsessAC(serverData.data));
      // } else {
      //   dispatch(errorAC(serverData.data.msg));
      // }
    }).then(res => console.log(res))
  };
};
