import React from 'react';
import { initCardsAC } from '../../redux/actionCreators'
function AdminForm() {


  function addCard(e) {
    e.preventDefault()

    const { question, answer, count, theme, tags } = e.target

    fetch('http://localhost:4000/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({
        question: question.value,
        answer: answer.value,
        count: count.value,
        theme: theme.value,
        tags: tags.value
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))



  }

  return (
    <div>
      <form onSubmit={addCard}>
        <input type="text" name="question" placeholder="вопрос" />
        <input type="text" name="answer" placeholder="ответ" />
        <input type="text" name="count" placeholder="счет" />
        <input type="text" name="theme" placeholder="тема" />
        <input type="text" name="tags" placeholder="тег" />
        <button>Добавить</button>
      </form>
    </div>
  );
}

export default AdminForm;
