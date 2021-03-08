import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Selector from "../Selector/Selector";
import styles from "./AuthPage.module.scss";
import { authFetchAC } from "../../redux/thunk/authFetchAC";
import { useDispatch, useSelector } from 'react-redux'



function AuthPage() {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error)
  const email = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const checkPsw = useRef();
  const password = useRef();
  const secretKey = useRef();

  const [inputs, setInputs] = useState({
    email: "",
    firstName: "",
    lastName: "",
    checkPsw: "",
    password: "",
    secretKey: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };
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
          onChange={handleChange}
          inpRef={firstName}
        />
        <Input
          inpType={"text"}
          inpPlaceholder={"Укажите Вашу фамилию"}
          onChange={handleChange}
          inpRef={lastName}
        />
        <Input
          inpType={"email"}
          inpPlaceholder={"Укажите Ваш email"}
          onChange={handleChange}
          inpRef={email}
        />
        <Input
          inpType={"password"}
          inpPlaceholder={"Придумайте пароль"}
          onChange={handleChange}
          inpRef={password}
        />
        <Input
          inpType={"password"}
          inpPlaceholder={"Подтвердите пароль"}
          onChange={handleChange}
          inpRef={checkPsw}
        />
        <Input
          inpType={"text"}
          inpPlaceholder={"Admin key"}
          onChange={handleChange}
          inpRef={secretKey}
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
