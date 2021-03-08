import {Link} from 'react-router-dom'
import Input from '../Input/Input'
import Button from '../Button/Button'
import styles from './LoginPage.module.scss'

function LoginPage(){
    return(
        <div className={styles.formWrapper}>

<form className={styles.loginForm}>
    <Input inpType={'email'} inpPlaceholder={'Введите еmail'} required/>
    <Input inpType={'password'} inpPlaceholder={'Введите пароль'} required/>
    <Button btnValue={'Войти'} />
    <p>Еще нет аккаунта? <Link to='/signup'>Зарегистрироваться.</Link></p>
</form>
        </div>
    )
}

export default LoginPage