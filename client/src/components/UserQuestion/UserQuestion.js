import React, {useEffect} from 'react';
import {userAddQuestionFetchAC} from "../../redux/thunk/userAddQuestionFetchAC";
import {useDispatch, useSelector} from "react-redux";
import {initUserCardsFetchAC} from "../../redux/thunk/userAddQuestionFetchAC";
import styles from './UserQuestion.module.scss'

function UserQuestion() {
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
            <div className={styles.userForm}>
                <form onSubmit={addCardAC}>
                    <input type="text" name="question" placeholder="Вопрос" required/>
                    <input type="text" name="answer" placeholder="Ответ" />
                    <input type="text" name="theme" placeholder="Тема" required/>
                    <input type="text" name="company" placeholder="Компания" required/>
                    <button>Добавить</button>
                </form>
                <div className={styles.cards}>{cards && cards.map(el => <div key={el._id} className={styles.card} >
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