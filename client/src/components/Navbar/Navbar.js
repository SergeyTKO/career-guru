import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import styles from './Navbar.module.scss'
import Button from '../Button/Button'

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className={styles.navbar}>
    <Link to='/'>Главная</Link>
          <Link to="/login">Войти</Link>
          <Link to="/signup">Зарегистрироваться</Link>

        {/* isLogged */}
          <Link to={{pathname: "/menu", state: { background: location }}}></Link>

    </nav>

  )


}


export default Navbar
