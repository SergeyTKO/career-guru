import Button from '../Button/Button'
import styles from './Home.module.scss'

function Home(){
    return(
        <div className={styles.homePage}>
            <Button btnValue={'Популярные вопросы на собеседовании'}/>
            <Button btnValue={'Пройти тестирование'}/>
        </div>
    )
}

export default Home