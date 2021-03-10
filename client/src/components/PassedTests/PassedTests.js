import React from 'react';
import {useSelector} from "react-redux";


function PassedTests(props) {
    const passedTests = useSelector(state => state.auth.user.solvedCards);

    return (
        <div>
            {passedTests && passedTests.map(el =>
                <div key={performance.now()}>
                    <div>Вопрос: {el.question}</div>
                    <div>Ответ: {el.answer[0].answer}</div>
                    <div>Баллы: {el.count}</div>
                </div>
            )}
        </div>
    );
}

export default PassedTests;