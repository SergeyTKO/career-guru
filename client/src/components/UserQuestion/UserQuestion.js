import React, {useEffect} from 'react';
import styles from "../AdminForm/AdminForm.module.scss";
import {userAddQuestionFetchAC} from "../../redux/thunk/userAddQuestionFetchAC";
import {useDispatch, useSelector} from "react-redux";
import {initUserCardsFetchAC} from "../../redux/thunk/userAddQuestionFetchAC";

function UserQuestion(props) {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.user.result.userQuestions);
    useEffect(() => {
        dispatch(initUserCardsFetchAC());
    }, [dispatch]);

    function addCardAC(e) {
        e.preventDefault()
        const {question, answer, theme, company} = e.target
        dispatch(userAddQuestionFetchAC(question, answer, theme, company))
        dispatch(initUserCardsFetchAC());
    }

    return (
        <div>
            <div className={styles.adminForm}>
                <form onSubmit={addCardAC}>
                    <input type="text" name="question" placeholder="Вопрос" required/>
                    <input type="text" name="answer" placeholder="Ответ" />
                    <input type="text" name="theme" placeholder="Тема" required/>
                    <input type="text" name="company" placeholder="Компания" required/>
                    <button>Добавить</button>
                </form>
                <div>{cards && cards.map(el => <div key={el._id}>
                    <div>{el.question}</div>
                    <div>{el.answer}</div>
                    <div>{el.theme}</div>
                    <div>{el.company}</div>
                </div>)}</div>
            </div>

        </div>
    );
}

export default UserQuestion;