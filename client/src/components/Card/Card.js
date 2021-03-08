import React from 'react';
import QuestionCard from "../QuestionCard/QuestionCard";
import AnswerCard from "../AnswerCard/AnswerCard";
import styles from './Card.module.scss'

function Card({card}) {

    const buttonHandler = (event) => {
        console.log(event.target.value)
    }

    return (
        <div className={styles.card}>
                <QuestionCard question={card.question}/>
                <AnswerCard answer={card.answer}/>
        </div>
    );
}

export default Card;