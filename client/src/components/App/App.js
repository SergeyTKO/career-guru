import React, {useEffect} from 'react'
import {Switch, Route, useLocation} from "react-router-dom"
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import Modal from '../Modal/Modal'
import AuthPage from '../AuthPage/AuthPage'
import LoginPage from '../LoginPage/LoginPage'
import StartPage from '../StartPage/StartPage'
import Deck from '../Deck/Deck'
import styles from './App.module.scss'
import AdminPage from '../AdminForm/AdminForm'
import {initCardsFetchAC} from "../../redux/thunk/userFetchAC";
import {useDispatch} from "react-redux";

function App() {
    const location = useLocation();
    const background = location.state && location.state.background;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initCardsFetchAC())
    }, [dispatch]);

    return (
        <React.Fragment>
            <Navbar/>
            <div className={styles.container}>
                <Switch location={background || location}>

                    {/* !isLogin */}
                    <Route exact path='/'><StartPage/></Route>
                    <Route path='/login'><LoginPage/></Route>
                    <Route path='/signup'><AuthPage/></Route>
                    <Route path='/cards'>
                        <div className={styles.cardsWrapper}><Deck/></div>
                    </Route>
                    <Route path='/admin'><AdminPage/></Route>

                    {/* isLogin */}
                    <Route path="/main"><Main/></Route>

                </Switch>
            </div>
            {background && <Route path="/menu"><Modal/></Route>}
        </React.Fragment>
    );
}

export default App;
