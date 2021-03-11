import React from 'react';
import styles from './QuestionCard.module.scss'

function QuestionCard({question, index, result, tags}) {
 
console.log(tags)

  return (
    <div className={styles.questionCard}>
     <div className={styles.questionCount}>{index + 1}/{result.currentTest.length}</div>
     <p>{question}</p>
{
  tags && tags.map((tag, i)=><span className={styles.tag} key={i}>#{tag}</span>)
}
    
    </div>
  );
}

export default QuestionCard;
