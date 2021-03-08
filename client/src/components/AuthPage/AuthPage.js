import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authSucsessAC } from "../../redux/actionCreators";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Selector from "../Selector/Selector";
import styles from "./AuthPage.module.scss";

function AuthPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  const { email, password, firstName, lastName, checkPsw  } = inputs;
  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.REACT_APP_URL+'/auth', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, firstName, lastName, checkPsw }),
    })
      .then((res) => res.json())
      .then((serverData) => {
        if (serverData.user) {
          dispatch(authSucsessAC(serverData.user));
          return history.push("/home");
        }
        return setError("Wrong email or password");
      })
      .catch(() => setError("Wrong email or password"));
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.authForm}>
        <Input inpType={"text"} inpPlaceholder={"Укажите Ваше имя"} onChange={handleChange} value={ firstName } />
        <Input inpType={"text"} inpPlaceholder={"Укажите Вашу фамилию"} onChange={handleChange} value={ lastName } />
        <Input inpType={"email"} inpPlaceholder={"Укажите Ваш email"} onChange={handleChange} value={ email }/>
        <Input inpType={"password"} inpPlaceholder={"Придумайте пароль"} onChange={handleChange} value={ password } />
        <Input inpType={"password"} inpPlaceholder={"Подтвердите пароль"} onChange={handleChange} value={ checkPsw } />
        <Selector
          optionsValue={[
            { value: "begginer", id: "1" },
            { value: "junior", id: "2" },
          ]}
        />
        <Button btnValue={"Войти"} />
        <p>
          Уже зарегистрированы? <Link to="/login">Войти.</Link>
        </p>
      </form>
    </div>
  );
}

export default AuthPage;
