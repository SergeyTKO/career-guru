import styles from './Home.module.scss'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {resetResultsAC} from "../../redux/actionCreators";
import {useEffect} from 'react';
import {customerFetchAC} from "../../redux/thunk/customerFetchAC";

function Home() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user)
    useEffect(() => {
        dispatch(resetResultsAC());
        dispatch(customerFetchAC(user.score, user.solvedCards, user))
    }, [dispatch])

    return (
        <div className={styles.homePage}>
            <Link to='/cards'>Популярные вопросы на собеседовании</Link>
            <Link to='/usercard'>Вопросы от пользователей</Link>
            <Link to='/test'>Пройти тестирование</Link>
        </div>
    )
}

export default Home