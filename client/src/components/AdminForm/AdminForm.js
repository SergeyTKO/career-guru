import React from 'react';
import { initCardsAC } from '../../redux/actionCreators'
import { cardsTest } from "../Deck/cardsTest";
import QuestionCard from "../QuestionCard/QuestionCard";
import AnswerCard from "../AnswerCard/AnswerCard";

function AdminForm() {


  function addCard(e) {
    e.preventDefault()

    const { question, answerTrue, answerFalse1, answerFalse2, answerFalse3, count, theme, tags } = e.target

    fetch('http://localhost:4000/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({
        question: question.value,
        answer: [{
          answer: answerTrue.value,
          validity: true,
        }, {
          answer: answerFalse1.value,
          validity: false
        }, {
          answer: answerFalse2.value,
          validity: false
        }, {
          answer: answerFalse3.value,
          validity: false
        }
        ],
        count: count.value,
        theme: theme.value,
        tags: tags.value
      })
    })
      .then(res => res.json())
    // .then(data => console.log(data))

  }

  function deleteCard(e) {
    const { id } = e.target
    // console.log('>>>>>>>>>',{id});
    fetch('http://localhost:4000/admin', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ _id: id })
    })
      .then(res => res.json())
    // .then(data => console.log(data))
  }

  return (
    <div>
      <form onSubmit={addCard}>
        <input type="text" name="question" placeholder="вопрос" />
        <input type="text" name="answerTrue" placeholder="Правильный ответ" />
        <input type="text" name="answerFalse1" placeholder="Неправильный ответ" />
        <input type="text" name="answerFalse2" placeholder="Неправильный ответ" />
        <input type="text" name="answerFalse3" placeholder="Неправильный ответ" />
        <input type="number" name="count" placeholder="счет" />
        <input type="text" name="theme" placeholder="тема" />
        <input type="text" name="tags" placeholder="тег" />
        <button>Добавить</button>
      </form>
      <div>
        {cardsTest && cardsTest.map(el => <div key={Math.random()}>
          <QuestionCard question={el.question} />
          <AnswerCard answer={el.answer} />
          {console.log('>>>>>',el)}
          <button id={el._id} onClick={(deleteCard)}>Удалить</button>
        </div>)}
      </div>
    </div>

  );
}

export default AdminForm;
