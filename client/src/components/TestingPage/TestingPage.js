import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Card from '../Card/Card'
import styles from './TestingPage.module.scss'
import {initTestAC, resetUserStatsAC} from "../../redux/actionCreators";
import Button from "../Button/Button";
import {useHistory} from "react-router-dom";

function TestingPage() {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.admin.cards);
    const user = useSelector(state => state.auth.user)

    const result = cards.filter(x => !user.solvedCards.some(y => x._id === y._id))
    const history = useHistory()
    const buttonHandler = (event) => {
        event.preventDefault()
        dispatch(resetUserStatsAC())
        history.push('/home')
    }
    dispatch(initTestAC(result.splice(0,5)))

    const cardsToTest = useSelector(state => state.user.result.currentTest)

    return (
        <div>
            {cardsToTest.length > 0 ? <div className={styles.testingPage}>
                    {cardsToTest && <Card cardsToTest={cardsToTest}/>}
                </div>
                :
                <div>Вы прошли все тесты. Скоро у нас появятся новые! Сбросить тесты и начать заново?
                    <Button btnValue={"А давай!"} buttonHandler={buttonHandler}/></div>}
        </div>
    )
}

export default TestingPage