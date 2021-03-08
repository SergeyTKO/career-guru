import React from 'react';
import QuestionCard from "../QuestionCard/QuestionCard";
import AnswerCard from "../AnswerCard/AnswerCard";
import styles from './Card.module.scss'
import {useDispatch} from "react-redux";
import {answerAC, resultPlusOneAC, restToFinishAC} from "../../redux/actionCreators";

function Card({card}) {
    const dispatch = useDispatch()
    const buttonHandler = (event) => {
        if (event.target.value === card.answer[0].answer) {
            dispatch(answerAC(card))
            dispatch(resultPlusOneAC())
            dispatch(restToFinishAC())
        }
    }

    return (
        <div className={styles.card}>
                <QuestionCard question={card.question}/>
                <AnswerCard answer={card.answer} buttonHandler={buttonHandler}/>
        </div>
    );
}

export default Card;