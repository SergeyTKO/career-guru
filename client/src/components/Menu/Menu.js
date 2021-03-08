import {Link} from 'react-router-dom'
import styles from "./Menu.module.scss";

function Menu() {
  return (
    <div className={styles.menu}>
      <h3>Меню</h3>
      <hr />

      <ul>
      <li><Link to='/home'>Главная</Link></li>
        <li>Избранное</li>
        <li>Пройденные тесты</li>
        <li><Link to='/cards'>К изучению</Link></li>
        <li>Выйти</li>
      </ul>
    </div>
  );
}

export default Menu;
