import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Card from '../Card/Card'
import styles from './TestingPage.module.scss'
import {initTestAC} from "../../redux/actionCreators";
import _shuffleSelf from "lodash-es/_shuffleSelf";

function TestingPage() {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.admin.cards);
    const solvedCards = useSelector(state => state.auth.user.solvedCards)
    if (solvedCards.length > 0) {
        const result = cards.filter(x => !solvedCards.some(y => x._id === y._id));
        dispatch(initTestAC(result))
    } else dispatch(initTestAC(cards))
    const cardsToTest = useSelector(state => state.user.result.currentTest)
    return (
        <div>
            <div className={styles.testingPage}>
                {cardsToTest && <Card cardsToTest={cardsToTest}/>}
            </div>
        </div>
    )
}

export default TestingPage