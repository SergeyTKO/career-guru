import React from 'react';
import {adminFetchAC} from "../../redux/thunk/adminFetchAC";
import {useDispatch} from "react-redux";

function AdminForm() {
    const dispatch = useDispatch();

    function addCardAC(e) {
        e.preventDefault()

        const {question, answerTrue, answerFalse1, answerFalse2, answerFalse3, count, theme, tags} = e.target
        dispatch(adminFetchAC(question, answerTrue, answerFalse1, answerFalse2, answerFalse3, count, theme, tags))
    }

    return (
        <div>
            <form onSubmit={addCardAC}>
                <input type="text" name="question" placeholder="вопрос"/>
                <input type="text" name="answerTrue" placeholder="Правильный ответ"/>
                <input type="text" name="answerFalse1" placeholder="Неправильный ответ"/>
                <input type="text" name="answerFalse2" placeholder="Неправильный ответ"/>
                <input type="text" name="answerFalse3" placeholder="Неправильный ответ"/>
                <input type="number" name="count" placeholder="счет"/>
                <input type="text" name="theme" placeholder="тема"/>
                <input type="text" name="tags" placeholder="тег"/>
                <button>Добавить</button>
            </form>
        </div>
    );
}

export default AdminForm;
