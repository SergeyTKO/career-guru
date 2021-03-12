import React from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Banner from '../Banner/Banner'
import AdminPage from '../AdminForm/AdminForm'
import IntrodusingBlock from '../IntrodusingBlock/IntrodusingBlock'
import styles from './StartPage.module.scss'

function StartPage(){

    const auth = useSelector(state=>state.auth)

    return(
        <React.Fragment>
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
            </React.Fragment>
    )
}

export default StartPage