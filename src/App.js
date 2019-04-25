import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './styles/App.css';
import Header from './Header';
import Name from './Name';
import Game from './Game';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Name />
          </React.Fragment>
        )} />
        <Route path="/game" component={Game} /> 
      </div>
    </Router>
  );
}

export default App;
