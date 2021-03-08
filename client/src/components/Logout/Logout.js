import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutAC } from "../../redux/actionCreators";

function Logout() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    
    fetch(process.env.REACT_APP_URL+'/logout').then(() => {
      dispatch(logoutAC());
      history.push("/");
    });
  });
  return <></>;
}
export default Logout;
