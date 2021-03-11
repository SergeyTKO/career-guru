import React from 'react';
import styles from './QuestionCard.module.scss'

function QuestionCard({question, index, result}) {
 
result.currentTest.map(test=>console.log(test.tags[0]))

  return (
    <div className={styles.questionCard}>
     <div className={styles.questionCount}>{index + 1}/{result.currentTest.length}</div>
     <p>{question}</p>
{
  result.currentTest.tags && result.currentTest.map(test=><span>#{test.tags.map(tag=>tag)}</span>)
}
    
    </div>
  );
}

export default QuestionCard;
