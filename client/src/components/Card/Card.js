import React from 'react';
import QuestionCard from "../QuestionCard/QuestionCard";
import AnswerCard from "../AnswerCard/AnswerCard";
import styles from './Card.module.scss'

function Card({card}) {

    return (
        <div className={styles.card}>
                <QuestionCard question={card.question}/>
                <AnswerCard answer={card.answer}/>

        </div>
    );
}

export default Card;