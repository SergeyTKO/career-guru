import { Link } from "react-router-dom";
import React, { useState,useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loginFetchAC } from "../../redux/thunk/loginFetchAC";
import { googleFetchAC } from "../../redux/thunk/googleFetchAC";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./LoginPage.module.scss";
import logo from '../../image/Google__G__Logo.svg'

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
    event.preventDefault();
    window.open("http://localhost:4000/auth/google", "_self");

    // dispatch(
    //   googleFetchAC()
    // );
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
        {/* <Button btnValue={"Google"} buttonHandler={googleHandler}/> */}
        {/* <a href="http://localhost:4000/auth/google" onClick={googleHandler} className={styles.googleBtn}> </a> */}
       
        <div class={styles.googleBtn}>
  <div class={styles.googleIconWrapper}>
    <img class={styles.googleIcon} src={logo}/>
  </div>
  <p class={styles.googleBtnText}>Войти с помощью Google</p>
</div>
        <p>
          Еще нет аккаунта? <Link to="/signup">Зарегистрироваться.</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
