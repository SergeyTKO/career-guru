import React from 'react';
import styles from './QuestionCard.module.scss'

function QuestionCard({question, index, result}) {
 
  return (
    <div className={styles.questionCard}>
     <div className={styles.questionCount}>{index + 1}/{result.currentTest.length}</div>
     <p>{question}</p>
    </div>
  );
}

export default QuestionCard;
