import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Banner from '../Banner/Banner'
import AdminPage from '../AdminForm/AdminForm'
import styles from './StartPage.module.scss'
import IntrodusingBlock from '../IntrodusingBlock/IntrodusingBlock'

function StartPage(){

    const auth = useSelector(state=>state.auth)

    return(
        <>
            {
            auth.isAuth && auth.user.isAdmin ? <Redirect to='/admin' children={<AdminPage />} />
            :
            auth.isAuth && !auth.user.isAdmin ? <Redirect to='/home' children={<AdminPage />} />
            :
        <div className={styles.startPage}>
            <Banner />
            <IntrodusingBlock />
        </div>

            }
            </>
    )
}

export default StartPage