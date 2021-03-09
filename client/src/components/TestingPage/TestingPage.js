import {useDispatch, useSelector} from "react-redux";
import Card from '../Card/Card'
import styles from './TestingPage.module.scss'
import {initTestAC} from "../../redux/actionCreators";

function TestingPage() {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.admin.cards);
    dispatch(initTestAC(cards));

    return (
        <div className={styles.testingPage}>
            {cards && <Card cards={cards}/>}
        </div>
    )
}

export default TestingPage