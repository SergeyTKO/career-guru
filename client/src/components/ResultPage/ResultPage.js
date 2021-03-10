import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {resetResultsAC, updateUserStatsAC} from "../../redux/actionCreators";
import {customerFetchAC} from "../../redux/thunk/customerFetchAC";

function ResultPage(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user)
    const results = useSelector(state => state.user.result)
    const clickHandler = () => {
        dispatch(resetResultsAC())
    }
    useEffect(() => {
        dispatch(customerFetchAC(user.score, user.solvedCards, user))
    }, [dispatch])
    return (
        <div className={styles.resultPage}>
            <div>Мамкин программист, ты ответил(-а) на {results.resultCounter} вопроса из {results.currentTest.length} и набрал <span>{results.count}</span> баллов</div>
            <Link to='/' onClick={clickHandler}>Вернуться на главную</Link>
        </div>
    );
}

export default ResultPage;