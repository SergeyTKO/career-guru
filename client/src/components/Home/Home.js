import Button from '../Button/Button'
import styles from './Home.module.scss'
import {Link} from 'react-router-dom'

function Home(){
    return(
        <div className={styles.homePage}>
            <Link to='/cards'>Популярные вопросы на собеседовании</Link>
            <Link to='/test'>Пройти тестирование</Link>
        </div>
    )
}

export default Home