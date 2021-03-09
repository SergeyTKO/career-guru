import React, { useEffect } from 'react';
import { adminFetchAC } from "../../redux/thunk/adminFetchAC";
import { useDispatch, useSelector } from "react-redux";
import {deleteFetchAC} from '../../redux/thunk/adminFetchAC'
import {initCardsFetchAC} from '../../redux/thunk/adminFetchAC'


function AdminForm() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initCardsFetchAC());
  }, [dispatch]);
  const cards = useSelector(state => state.admin.cards)

  function addCardAC(e) {
    e.preventDefault()

    const { question, answerTrue, answerFalse1, answerFalse2, answerFalse3, count, theme, tags } = e.target
    dispatch(adminFetchAC(question, answerTrue, answerFalse1, answerFalse2, answerFalse3, count, theme, tags))
  }

  function deleteCard(e){
    const {id} = e.target
    console.log(id);
    e.preventDefault()
    dispatch(deleteFetchAC(id))
  }

  return (
    <div>
      <form onSubmit={addCardAC}>
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
        {cards && cards.map(card => <div><div key={card._id} card={card}>{card.question}</div>
          <button id={card._id} style={{ background: 'white' }} onClick={deleteCard}>Удалить</button>
        </div>)}

      </div>
    </div>
  );
}

export default AdminForm;
