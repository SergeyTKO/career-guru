import Banner from '../Banner/Banner'
import styles from './StartPage.module.scss'
import IntrodusingBlock from '../IntrodusingBlock/IntrodusingBlock'

function StartPage(){
    return(
        <div className={styles.startPage} id="anchor">
            <Banner />
            <IntrodusingBlock />
        </div>
    )
}

export default StartPage