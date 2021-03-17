import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import Card from '../Card/Card'
import Button from "../Button/Button";
import {resetUserStatsAC} from "../../redux/actionCreators";
import styles from './TestingPage.module.scss'

function TestingPage() {
    const dispatch = useDispatch();
    const history = useHistory()

    const cardsToTest = useSelector(state => state.user.result.currentTest)

    const buttonHandler = (event) => {
        event.preventDefault()
        dispatch(resetUserStatsAC())
        history.push('/home')
    }

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