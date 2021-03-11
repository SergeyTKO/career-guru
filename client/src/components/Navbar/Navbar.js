import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logoutAC } from "../../redux/actionCreators";
import styles from "./Navbar.module.scss";
import logo from '../../image/icon.png'

function Navbar() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isAdmin = useSelector((state) => state.auth.user.isAdmin);

  function logout() {
    dispatch(logoutAC());
    history.push("/");
  }

  return (
    <nav className={styles.navbar}>

    <img src={logo} alt="logo" className={styles.logo}/>
      {auth.isAuth && isAdmin ? 
        <>
            <h1>АДМИН</h1>
            <p className={styles.logoutBtn} onClick={logout}></p> </>:
        auth.isAuth && !isAdmin ?
          
          <><Link to="/home" className={styles.main}></Link>
          <div className={styles.userName}>{auth.user.firstName}</div>
          <div className={styles.userStatus}>{auth.user.status}</div>
          <div className={styles.userScore}>{auth.user.score}</div>
          <Link
                to={{ pathname: "/menu", state: { background: location } }}
                className={styles.menu}
              ></Link></>
        :
    
        <><Link to="/" className={styles.main}></Link>
          <Link to="/login" className={styles.login}></Link>
          <Link to="/signup" className={styles.auth}></Link></>
      }
    </nav>
  );
}

export default Navbar;
