import React from 'react'
import './App.module.scss';
import { Switch, Route, useLocation} from "react-router-dom"
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import Modal from '../Modal/Modal'
import styles from './App.module.scss'


function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <React.Fragment>
        <Navbar />
      <Switch location={background || location}>
    <div className={styles.container}>
          <Route path="/main"><Main /></Route> 
    </div>
      </Switch>
       {background && <Route path="/menu"><Modal /></Route>}
    </React.Fragment>
  );
}

export default App;
