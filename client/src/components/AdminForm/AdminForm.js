import React, { useEffect } from 'react';
import { adminFetchAC } from "../../redux/thunk/adminFetchAC";
import { useDispatch, useSelector } from "react-redux";
import {deleteFetchAC} from '../../redux/thunk/adminFetchAC'
import {initCardsFetchAC} from '../../redux/thunk/adminFetchAC'
import Button from '../Button/Button'


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
    e.preventDefault()
    dispatch(deleteFetchAC(id))
  }

  return (
    <div>
      <form onSubmit={addCardAC}>
        <input type="text" name="question" placeholder="вопрос" required/>
        <input type="text" name="answerTrue" placeholder="Правильный ответ" required/>
        <input type="text" name="answerFalse1" placeholder="Неправильный ответ" required/>
        <input type="text" name="answerFalse2" placeholder="Неправильный ответ" required/>
        <input type="text" name="answerFalse3" placeholder="Неправильный ответ" required/>
        <input type="number" name="count" placeholder="счет" required/>
        <input type="text" name="theme" placeholder="тема" required/>
        <input type="text" name="tags" placeholder="тег" required/>
        <button>Добавить</button>
      </form>
      <div>
        {cards && cards.map(card => <div><div key={card._id} card={card}>{card.question}</div>
        <Button id={card._id} onClick={deleteCard} btnValue={'удалить'}/>
        </div>)}

      </div>
    </div>
  );
}

export default AdminForm;
