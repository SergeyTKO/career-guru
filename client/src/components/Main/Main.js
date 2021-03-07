import React from 'react';
import AnswerCard from '../AnswerCard/AnswerCard'
import QuestionCard from '../QuestionCard/QuestionCard'
import styles from './Main.module.scss'


function Main() {
  return (
    <div>
      <QuestionCard />
      <AnswerCard />
       </div>
  );
}

export default Main;
