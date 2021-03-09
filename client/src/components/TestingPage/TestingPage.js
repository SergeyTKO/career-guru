import {useDispatch, useSelector} from "react-redux";
import Card from '../Card/Card'
import styles from './TestingPage.module.scss'
import {initTestAC} from "../../redux/actionCreators";

function TestingPage() {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.admin.cards);
    dispatch(initTestAC(cards));
    const cardsToTest = useSelector(state => state.user.result.currentTest)

    return (
        <div className={styles.testingPage}>
            {cardsToTest && <Card cardsToTest={cardsToTest}/>}
        </div>
    )
}

export default TestingPage