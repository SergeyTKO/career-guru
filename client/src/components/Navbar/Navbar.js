import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Войти</Link>
        </li>
        <li>
          <Link to="/signup">Зарегистрироваться</Link>
        </li>
    <li>
      <Link to="/main">Главная</Link>
    </li>
    <li>
      <Link to="/button">Кнопка</Link>
    </li>
      </ul>
    </nav>

  )


}


export default Navbar
