import React from 'react';
import QuestionCard from "../QuestionCard/QuestionCard";
import AnswerCard from "../AnswerCard/AnswerCard";
import styles from './Card.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {answerAC, resultPlusOneAC, restToFinishAC} from "../../redux/actionCreators";
import {useHistory} from "react-router-dom";

function Card({card}) {
    const history = useHistory()
    const dispatch = useDispatch()
    const result = useSelector(state => state.user.result.numOfRestQuestions)
    const buttonHandler = (event) => {
        if (event.target.value === card.answer[0].answer) {
            dispatch(answerAC(card))
            dispatch(resultPlusOneAC())
            dispatch(restToFinishAC())
        }
    }
        if ( result === 0) {
            history.push('/results')
        };

    return (
        <div className={styles.card}>
                <QuestionCard question={card.question}/>
                <AnswerCard answer={card.answer} buttonHandler={buttonHandler}/>
        </div>
    );
}

export default Card;