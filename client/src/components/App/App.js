import './App.module.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import store from '../../redux/store'
// import { Provider } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'


function App() {
  return (
      <Router>
    <div className="App">
        <Navbar />
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
        </Switch>
    </div>
      </Router>
  );
}

export default App;
