import React from 'react';
import {cardsTest} from "../Deck/cardsTest";
import QuestionCard from "../QuestionCard/QuestionCard";
import AnswerCard from "../AnswerCard/AnswerCard";

function Card(props) {
    return (
        <div>
            {cardsTest && cardsTest.map(el => <div key={Math.random()}>
                <QuestionCard question={el.question}/>
                <AnswerCard answer={el.answer}/>
            </div>)}

        </div>
    );
}

export default Card;