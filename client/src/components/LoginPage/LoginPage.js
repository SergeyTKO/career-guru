import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authSucsessAC } from "../../redux/actionCreators";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./LoginPage.module.scss";

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { email, password } = inputs;

  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.REACT_APP_URL+'/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((serverData) => {
        if (serverData.user) {
          dispatch(authSucsessAC(serverData.user));

          return history.push("/dashboard");
        }

        return setError("Неверный mail или пароль");
      })
      .catch(() => setError("Неверный mail или пароль"));
  };
  return (
    <div className={styles.formWrapper}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <Input
          inpType={"email"}
          inpPlaceholder={"Введите еmail"}
          onChange={handleChange}
          value={email}
        />
        <Input
          inpType={"password"}
          inpPlaceholder={"Введите пароль"}
          onChange={handleChange}
          value={password}
        />
        <div className="error">{error}</div>
        <Button btnValue={"Войти"} />
        <p>
          Еще нет аккаунта? <Link to="/signup">Зарегистрироваться.</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
