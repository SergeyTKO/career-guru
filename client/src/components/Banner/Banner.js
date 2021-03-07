import { HashLink } from 'react-router-hash-link'
import styles from './Banner.module.scss'

function Banner(){
    return(
        <div className={styles.banner}>
            <div>
            <h1>Мы прокачаем твои <span style={{color:"#A2000C"}}>hard-skills</span></h1>
            <HashLink smooth to='/#anchor' >Попробовать</HashLink>
            </div>
        </div>
    )
}

export default Banner