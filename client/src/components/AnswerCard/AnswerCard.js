import React from 'react';
import Button from "../Button/Button";
import styles from './AnswerCard.module.scss'


function AnswerCard({ answer, buttonHandler,state }) {




  return (
    <div className={styles.answerCard}>
      <Button btnValue={answer[0].answer} buttonHandler={buttonHandler} state={state}/>
      <Button btnValue={answer[1].answer} buttonHandler={buttonHandler} state={state}/>
      <Button btnValue={answer[2].answer} buttonHandler={buttonHandler} state={state}/>
      <Button btnValue={answer[3].answer} buttonHandler={buttonHandler} state={state}/>
    </div>
  );
}

export default AnswerCard;
