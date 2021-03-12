import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {resetResultsAC} from "../../redux/actionCreators";
import styles from './ResultPage.module.scss'

function ResultPage() {
    const dispatch = useDispatch();
    const results = useSelector(state => state.user.result)
    const user = useSelector(state=>state.auth.user.firstName)
    const clickHandler = () => {
        dispatch(resetResultsAC())
    }

    return (
        <div className={styles.resultPage}>
            <div>{user}, ты ответил(-а) на {results.resultCounter} вопроса из {results.currentTest.length} и набрал <span>{results.count}</span> баллов</div>
            <div className={styles.btnWrapper}>
            <Link to='/' onClick={clickHandler}>На главную</Link>
            <Link to='/passed' onClick={clickHandler}>Пройденные тесты</Link>
            </div>
        </div>
    );
}

export default ResultPage;