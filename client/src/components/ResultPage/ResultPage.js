import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {resetResultsAC} from "../../redux/actionCreators";

function ResultPage(props) {
    const dispatch = useDispatch();
    const results = useSelector(state => state.user.result)
    const clickHandler = () => {
        dispatch(resetResultsAC())
    }
    return (
        <div>
            <div>Мамкин программист, ты ответил(-а) на {results.resultCounter} из {results.currentTest.length} и набрал {results.count} баллов</div>
            <div><Link to='/' onClick={clickHandler}>Вернуться на главную</Link></div>
        </div>
    );
}

export default ResultPage;