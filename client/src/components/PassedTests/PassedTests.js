import React from 'react';
import {useSelector} from "react-redux";
import styles from './PassedTests.module.scss'


function PassedTests(props) {
    const passedTests = useSelector(state => state.auth.user.solvedCards);

    return (
        <div className={styles.passedTests}>
        <h1>Вопросы, на которые ты уже знаешь ответ:</h1>
            {passedTests && passedTests.map(el =>
                <div key={performance.now()} className={styles.passedTestBlock}>
                    <div><strong>Вопрос: </strong>{el.question}</div>
                    <div><strong>Ответ: </strong>{el.answer[0].answer}</div>
                    <div><strong>Баллы: </strong>{el.count}</div>
                </div>
            )}
        </div>
    );
}

export default PassedTests;