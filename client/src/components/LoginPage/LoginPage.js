import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginFetchAC } from "../../redux/thunk/loginFetchAC";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./LoginPage.module.scss";

function LoginPage() {
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  const error = useSelector((state) => state.auth.error);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginFetchAC(email, password));
  };

  return (
    <div className={styles.formWrapper}>
    <div className={styles.error}>{error}</div>
      <form className={styles.loginForm}>
        
        <Input
          inpType={"email"}
          inpPlaceholder={"Введите еmail"}
          inpRef={email}
          required
        />
        <Input
          inpType={"password"}
          inpPlaceholder={"Введите пароль"}
          inpRef={password}
          required
        />

        <Button btnValue={"Войти"} buttonHandler={handleSubmit} />

        <p>
          Еще нет аккаунта? <Link to="/signup">Зарегистрироваться.</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
