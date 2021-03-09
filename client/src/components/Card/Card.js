import React, {useState} from 'react';
import QuestionCard from "../QuestionCard/QuestionCard";
import AnswerCard from "../AnswerCard/AnswerCard";
import styles from './Card.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {answerAC, resultPlusOneAC, restToFinishAC, testProgressAC} from "../../redux/actionCreators";
import {useHistory} from "react-router-dom";

function Card({cards}) {
    const [state, setState] = useState('');
    const history = useHistory()
    const dispatch = useDispatch()
    const result = useSelector(state => state.user.result.numOfRestQuestions)
    const i = useSelector(state => state.user.result.testProgress)
    const buttonHandler = (event) => {
        if (event.target.value === cards[i].answer[0].answer) {
            dispatch(answerAC(cards[i]))
            dispatch(resultPlusOneAC())
            setState('Правильно')
            setTimeout(() => {
                dispatch(restToFinishAC())
                dispatch(testProgressAC())
                setState('');
            }, 1500);
        } else {
            setState('Неправильно')
            setTimeout(() => {
                dispatch(restToFinishAC());
                dispatch(testProgressAC())
                setState('');
            }, 1500)
        }
    }
    if (result === 0) {
        history.push('/results')
    }
    ;

    return (
        <div className={styles.card}>
            <div>{state}</div>
            <QuestionCard question={cards[i].question}/>
            <AnswerCard answer={cards[i].answer} buttonHandler={buttonHandler}/>
        </div>
    );
}

export default Card;