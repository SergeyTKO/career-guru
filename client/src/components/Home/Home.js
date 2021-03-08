import Button from '../Button/Button'
import styles from './Home.module.scss'
import {Link} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {resetResultsAC} from "../../redux/actionCreators";

function Home(){
    const dispatch = useDispatch();
    dispatch(resetResultsAC());

    return(
        <div className={styles.homePage}>
            <Link to='/cards'>Популярные вопросы на собеседовании</Link>
            <Link to='/test'>Пройти тестирование</Link>
        </div>
    )
}

export default Home