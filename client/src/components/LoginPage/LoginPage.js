import { Link } from "react-router-dom";
import React, { useState,useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loginFetchAC } from "../../redux/thunk/loginFetchAC";
import { googleFetchAC } from "../../redux/thunk/googleFetchAC";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./LoginPage.module.scss";

function LoginPage() {
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  const error = useSelector(state => state.auth.error)
  const [inputs, setInputs] = useState({ email: "", password: "" });


  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      loginFetchAC(email, password)
    );
  };
  const googleHandler = (event) => {
    // event.preventDefault();
    dispatch(
      googleFetchAC()
    );
  };
  return (
    <div className={styles.formWrapper}>
      <form className={styles.loginForm} >
      <div className="error">{error}</div>
        <Input
          inpType={"email"}
          inpPlaceholder={"Введите еmail"}
          onChange={handleChange}
          inpRef={email}
          required
        />
        <Input
          inpType={"password"}
          inpPlaceholder={"Введите пароль"}
          onChange={handleChange}
          inpRef={password}
          required
        />
      
        <Button btnValue={"Войти"} buttonHandler={handleSubmit}/>
        <Button btnValue={"Google"} buttonHandler={googleHandler}/>
        <a href="http://localhost:4000/auth/google"> ggggggg</a>
        <p>
          Еще нет аккаунта? <Link to="/signup">Зарегистрироваться.</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
