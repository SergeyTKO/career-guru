import React from 'react';
import styles from './QuestionCard.module.scss'

function QuestionCard({question}) {
  return (
    <div className={styles.questionCard}>
     <h3>Вопрос:</h3> 
     <p>{question}</p>
    </div>
  );
}

export default QuestionCard;
