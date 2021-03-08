import React from 'react'
import { Switch, Route, useLocation} from "react-router-dom"
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import Modal from '../Modal/Modal'
import AuthPage from '../AuthPage/AuthPage'
import LoginPage from '../LoginPage/LoginPage'
import StartPage from '../StartPage/StartPage'
import Deck from '../Deck/Deck'
import styles from './App.module.scss'
import AdminPage from '../AdminForm/AdminForm'
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Logout from '../Logout/Logout';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <React.Fragment>
        <Navbar />
      <Switch location={background || location}>
    <div className={styles.container}>
       {/* !isLogin */}
       <Route exact path='/'><StartPage /></Route>
       <Route path='/login'><LoginPage /></Route>
       <Route path='/signup'><AuthPage /></Route>
       <Route path='/cards'><div className={styles.cardsWrapper}><Deck /></div></Route>
       <Route path='/admin'><AdminPage /></Route>
       <Route path='/logout'><Logout /></Route>

      {/* isLogin */}
      <PrivateRoute path='/main'><Main /></PrivateRoute> 
    </div>
      </Switch>
       {background && <Route path="/menu"><Modal /></Route>}
    </React.Fragment>
  );
}

export default App;
