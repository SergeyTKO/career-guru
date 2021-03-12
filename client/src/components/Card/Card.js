import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import QuestionCard from "../QuestionCard/QuestionCard";
import AnswerCard from "../AnswerCard/AnswerCard";
import {answerAC, resultPlusOneAC, restToFinishAC, testProgressAC, updateUserStatsAC} from "../../redux/actionCreators";
import styles from './Card.module.scss'

function Card({cardsToTest}) {
    const [state, setState] = useState('');
    const history = useHistory()
    const dispatch = useDispatch()
    const result = useSelector(state => state.user.result)
    const index = useSelector(state => state.user.result.testProgress)
   
       const divHandler = (event) => {
            
                if (event.target.value === cardsToTest[index].answer.filter(el => el.validity)[0].answer) {
                dispatch(answerAC(cardsToTest[index]))
                dispatch(resultPlusOneAC())
                setState('Правильно')
                setTimeout(() => {
                    dispatch(restToFinishAC())
                    dispatch(testProgressAC())
                    setState('');
                }, 900);
            } else {
                setState('Неправильно')
                setTimeout(() => {
                    dispatch(restToFinishAC());
                    dispatch(testProgressAC())
                    setState('');
                }, 900)
            }
        }
    
    
    if (result.numOfRestQuestions === 0) {
        dispatch(updateUserStatsAC(result))
        history.push('/results')
    }

        
        return (
            <div className={styles.card}>
            <div className={styles.answerStatus}>{state}</div>
            <QuestionCard question={cardsToTest[index].question} result={result} index={index} tags={cardsToTest[index].tags}/>
            <AnswerCard answer={cardsToTest[index].answer} divHandler={divHandler}/>
        </div>
    );

}

export default Card;
