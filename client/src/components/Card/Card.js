import React from 'react';
import {useSelector} from "react-redux";
import QuestionCard from "../QuestionCard/QuestionCard";
import AnswerCard from "../AnswerCard/AnswerCard";

function Card(props) {
    const cards = useSelector(state => state.admin.cards);

    return (
        <div>
            {cards && cards.map(el => <div key={Math.random()}>
                <QuestionCard question={el.question}/>
                <AnswerCard answer={el.answer}/>
            </div>)}

        </div>
    );
}

export default Card;