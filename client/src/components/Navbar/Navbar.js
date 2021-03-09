import React from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import {logoutAC} from "../../redux/actionCreators";
import styles from "./Navbar.module.scss";

function Navbar() {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth);
    const isAdmin = useSelector(state => state.auth.user)

    function logout() {
        dispatch(logoutAC());
        history.push("/");
    };

    return (
        <nav className={styles.navbar}>

            {isAuth.isAuth ? (
                <React.Fragment>
                    <Link to="/home" className={styles.main}></Link>

                    {isAdmin.isAdmin ? <p className={styles.logoutBtn} onClick={logout}></p> :
                        <React.Fragment>
                            <div>{isAuth.user.firstName}</div>
                            <div>{isAuth.user.status}</div>
                            <div>{isAuth.user.score}</div>
                            <Link
                                to={{pathname: "/menu", state: {background: location}}}
                                className={styles.menu}></Link>

                        </React.Fragment>

                    }
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Link to="/" className={styles.main}></Link>
                    <Link to="/login" className={styles.login}></Link>
                    <Link to="/signup" className={styles.auth}></Link>
                </React.Fragment>
            )}
        </nav>
    );
}

export default Navbar;
