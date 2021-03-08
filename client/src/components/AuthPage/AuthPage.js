import {Link} from 'react-router-dom'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Selector from '../Selector/Selector'
import styles from './AuthPage.module.scss'

function AuthPage(){
    return(
        <div className={styles.formWrapper}>

<form className={styles.authForm}>
    <Input inpType={'text'} inpPlaceholder={'Укажите Ваше имя'} required/>
    <Input inpType={'text'} inpPlaceholder={'Укажите Вашу фамилию'} required/>
    <Input inpType={'email'} inpPlaceholder={'Укажите Ваш email'} required/>
    <Input inpType={'password'} inpPlaceholder={'Придумайте пароль'} required/>
    <Input inpType={'password'} inpPlaceholder={'Подтвердите пароль'} required/>
    <Selector optionsValue={[{value:'begginer', id: '1'}, {value:'junior', id: '2'}]} />
    <Button btnValue={'Войти'} />
    <p>Уже зарегистрированы? <Link to='/login'>Войти.</Link></p>
</form>
        </div>
    )
}

export default AuthPage