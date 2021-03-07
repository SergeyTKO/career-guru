import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import styles from './Navbar.module.scss'
import Button from '../Button/Button'

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className={styles.navbar}>
    <Link to='/' className={styles.main}></Link>
          <Link to="/login" className={styles.login}></Link>
          <Link to="/signup" className={styles.auth}></Link>

        {/* isLogged */}
          <Link to={{pathname: "/menu", state: { background: location }}}></Link>

    </nav>

  )


}


export default Navbar
