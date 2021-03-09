import React from 'react';
import Button from "../Button/Button";
import styles from './AnswerCard.module.scss'


function AnswerCard({ answer, buttonHandler }) {




  return (
    <div className={styles.answerCard}>
      <Button btnValue={answer[0].answer} buttonHandler={buttonHandler} />
      <Button btnValue={answer[1].answer} buttonHandler={buttonHandler} />
      <Button btnValue={answer[2].answer} buttonHandler={buttonHandler} />
      <Button btnValue={answer[3].answer} buttonHandler={buttonHandler} />
    </div>
  );
}

export default AnswerCard;
