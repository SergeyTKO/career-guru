import {Link} from 'react-router-dom'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Selector from '../Selector/Selector'
import styles from './AuthPage.module.scss'

function AuthPage(){
    return(
        <div className={styles.formWrapper}>

<form className={styles.authForm}>
    <Input inpType={'text'} inpPlaceholder={'Укажите Ваше имя'} />
    <Input inpType={'text'} inpPlaceholder={'Укажите Вашу фамилию'} />
    <Input inpType={'email'} inpPlaceholder={'Укажите Ваше имя'} />
    <Input inpType={'password'} inpPlaceholder={'Придумайте пароль'} />
    <Input inpType={'password'} inpPlaceholder={'Подтвердите пароль'} />
    <Selector optionsValue={[{value:'begginer', id: '1'}, {value:'junior', id: '2'}]} />
    <Button btnValue={'Войти'} />
    <p>Уже зарегистрированы? <Link to='/login'>Войти.</Link></p>
</form>
        </div>
    )
}

export default AuthPage