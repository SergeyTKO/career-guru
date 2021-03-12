import React, { useEffect } from 'react';
import { adminFetchAC } from "../../redux/thunk/adminFetchAC";
import { useDispatch, useSelector } from "react-redux";
import {deleteFetchAC} from '../../redux/thunk/adminFetchAC'
import {initCardsFetchAC} from '../../redux/thunk/adminFetchAC'
import Button from '../Button/Button'
import styles from './AdminForm.module.scss'


function AdminForm() {

  const dispatch = useDispatch();
  const cards = useSelector(state => state.admin.cards)

  useEffect(() => {
    dispatch(initCardsFetchAC());
  }, [dispatch]);
  
  function addCardAC(e) {
    e.preventDefault()

    const { question, answerTrue, answerFalse1, answerFalse2, answerFalse3, count, theme, tags } = e.target
    dispatch(adminFetchAC(question, answerTrue, answerFalse1, answerFalse2, answerFalse3, count, theme, tags))
    e.target.reset()
  }

  function deleteCard(event){
    event.preventDefault()
    const {id} = event.target
    dispatch(deleteFetchAC(id))
  }

  return (
    <div className={styles.adminForm}>
      <form onSubmit={addCardAC}>
        <input type="text" name="question" placeholder="вопрос" required/>
        <input type="text" name="answerTrue" placeholder="Правильный ответ" required/>
        <input type="text" name="answerFalse1" placeholder="Неправильный ответ" required/>
        <input type="text" name="answerFalse2" placeholder="Неправильный ответ" required/>
        <input type="text" name="answerFalse3" placeholder="Неправильный ответ" required/>
        <input type="number" name="count" placeholder="счет" required/>
        <input type="text" name="theme" placeholder="тема" required/>
        <input type="text" name="tags" placeholder="теги через запятую" required/>
        <button>Добавить</button>
      </form>
      <div className={styles.cards}>
      <h1>Карты с вопросами:</h1>
        {cards && cards.map(card => <div key={card._id} className={styles.card}><div card={card}>{card.question}</div>
        <Button id={card._id} buttonHandler={deleteCard} btnValue={'удалить'}/>
        </div>)}

      </div>
    </div>
  );
}

export default AdminForm;
