import React, {useState} from 'react';
import QuestionCard from "../QuestionCard/QuestionCard";
import AnswerCard from "../AnswerCard/AnswerCard";
import styles from './Card.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {answerAC, resultPlusOneAC, restToFinishAC, testProgressAC} from "../../redux/actionCreators";
import {useHistory} from "react-router-dom";

function Card({cardsToTest}) {
    const [state, setState] = useState('');
    const history = useHistory()
    const dispatch = useDispatch()
    const result = useSelector(state => state.user.result)
    const i = useSelector(state => state.user.result.testProgress)
    const divHandler = (event) => {
        if (event.target.value === cardsToTest[i].answer[0].answer) {
            dispatch(answerAC(cardsToTest[i]))
            dispatch(resultPlusOneAC())
            setState(true)
            setTimeout(() => {
                dispatch(restToFinishAC())
                dispatch(testProgressAC())
                setState('');
            }, 1200);
        } else {
            setState(false)
            setTimeout(() => {
                dispatch(restToFinishAC());
                dispatch(testProgressAC())
                setState('');
            }, 1200)
        }
    }
    if (result.numOfRestQuestions === 0) {
        history.push('/results')

    };

    return (
        <div className={styles.card}>
            <div>Вопрос {i + 1} из {result.currentTest.length}</div>
            <div>{state}</div>
            <QuestionCard question={cardsToTest[i].question}/>
            <AnswerCard answer={cardsToTest[i].answer} divHandler={divHandler}/>
        </div>
    );
}

export default Card;
