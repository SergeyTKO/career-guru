// import { authSucsessAC, errorAC } from "../../redux/actionCreators";
// import axios from "axios";

// export const googleFetchAC = () => {
//   return (dispatch) => {
//     axios.get(process.env.REACT_APP_URL + "/googleAuth").then((serverData) => {
//      console.log(serverData);
//       // if (serverData.data.user) {
//       //   window.localStorage.setItem("jwt", serverData.data.token);
//       //   dispatch(authSucsessAC(serverData.data));
//       // } else {
//       //   dispatch(errorAC(serverData.data.msg));
//       // }
//     })
//   };
// };

export const googleFetchAC = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    }).then((res)=>res.json()).then((data)=>console.log(data))
  };
};
