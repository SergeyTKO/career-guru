import React from 'react';
import styles from './AnswerCard.module.scss'
import PushTheAnswer from "../PushTheAnswer/PushTheAnswer";

function AnswerCard({answer, divHandler}) {
    return (
        <div className={styles.answerCard}>
            {answer && (answer.map(el =>
                <PushTheAnswer key={el._id} divValue={el} divHandler={divHandler}/>))}
        </div>
    );
}

export default AnswerCard;
