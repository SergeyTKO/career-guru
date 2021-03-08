import {useSelector} from "react-redux";
import Card from '../Card/Card'
import styles from './TestingPage.module.scss'

function TestingPage(){

    const cards = useSelector(state => state.admin.cards);

    return(
<div className={styles.testingPage}>
{cards&&cards.map(card=><Card key={card._id} card={card}/>)}
</div>
    )
}

export default TestingPage