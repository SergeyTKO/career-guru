import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import styles from './Navbar.module.scss'

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/login">Войти</Link>
        </li>
        <li>
          <Link to="/signup">Зарегистрироваться</Link>
        </li>
        <li>
          <Link to='/main'>Главная</Link>
        </li>

        {/* isLogged */}
        <li>
          <Link to={{pathname: "/menu", state: { background: location }}}>avatar</Link>
        </li>

      </ul>
    </nav>

  )


}


export default Navbar
