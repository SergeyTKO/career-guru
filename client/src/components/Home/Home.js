import styles from './Home.module.scss'
import {Link} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {resetResultsAC} from "../../redux/actionCreators";
import { useEffect } from 'react';
import { googleFetchAC } from '../../redux/thunk/googleFetchAC';

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