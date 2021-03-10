import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Selector from "../Selector/Selector";
import styles from "./AuthPage.module.scss";
import { authFetchAC } from "../../redux/thunk/authFetchAC";
import { useDispatch, useSelector } from "react-redux";

function AuthPage() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const email = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const checkPsw = useRef();
  const password = useRef();
  const secretKey = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      authFetchAC(email, password, firstName, lastName, checkPsw, secretKey)
    );
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.authForm}>
        <Input
          inpType={"text"}
          inpPlaceholder={"Укажите Ваше имя"}
          inpRef={firstName}
          required
        />
        <Input
          inpType={"text"}
          inpPlaceholder={"Укажите Вашу фамилию"}
          inpRef={lastName}
          required
        />
        <Input
          inpType={"email"}
          inpPlaceholder={"Укажите Ваш email"}
          inpRef={email}
          required
        />
        <Input
          inpType={"password"}
          inpPlaceholder={"Придумайте пароль"}
          inpRef={password}
          required
        />
        <Input
          inpType={"password"}
          inpPlaceholder={"Подтвердите пароль"}
          inpRef={checkPsw}
          required
        />
        <Input
          inpType={"text"}
          inpPlaceholder={"Admin key"}
          inpRef={secretKey}
          required
        />

        <Selector
          optionsValue={[
            { value: "begginer", id: "1" },
            { value: "junior", id: "2" },
          ]}
        />
        <Button btnValue={"Зарегистрироваться"} buttonHandler={handleSubmit} />
        <p>
          Уже зарегистрированы? <Link to="/login">Войти.</Link>
        </p>
      </form>
      <div className="error">{error}</div>
    </div>
  );
}

export default AuthPage;
