import React from 'react';
import { Switch, BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Header from './components/Header';
import Game from './components/Game';
import HighScores from './components/HighScores';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header>
          <Link to="/">Game</Link>
          <Link to="high-scores">High Scores</Link>
        </Header>

        <Switch>
          <Route path="/high-scores" component={HighScores} />
          <Route path="/" component={Game} />
        </Switch>
      </Router> 
    </div>
  );
};

export default App;
