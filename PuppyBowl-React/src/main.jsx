import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/all-players" component={AllPlayers} />
          <Route path="/details/:playerId" component={SinglePlayer} />
          <Route path="/create-player" component={NewPlayerForm} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));