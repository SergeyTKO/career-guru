import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Button from "../Button/Button";

function Navbar() {
  const location = useLocation();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const state = useSelector((state) => state);
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.main}></Link>

      {isAuth ? (
        <>
          <Link to="/logout">Logout</Link>
          <Link to="/home"> Home </Link>
          {/* isLogged */}
          <Link
            to={{ pathname: "/menu", state: { background: location } }}
          ></Link>
        </>
      ) : (
        <>
          <Link to="/login" className={styles.login}></Link>
          <Link to="/signup" className={styles.auth}></Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
