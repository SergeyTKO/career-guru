import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {resetResultsAC} from "../../redux/actionCreators";
import styles from './ResultPage.module.scss'

function ResultPage(props) {
    const dispatch = useDispatch();
    const results = useSelector(state => state.user.result)
    const clickHandler = () => {
        dispatch(resetResultsAC())
    }
    return (
        <div className={styles.resultPage}>
            <div>Мамкин программист, ты ответил(-а) на {results.resultCounter} вопроса из {results.currentTest.length} и набрал <span>{results.count}</span> баллов</div>
            <Link to='/' onClick={clickHandler}>Вернуться на главную</Link>
        </div>
    );
}

export default ResultPage;