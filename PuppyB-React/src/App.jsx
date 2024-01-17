import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import PlayerDetails from './components/PlayerDetails';
import NewPlayerForm from './components/NewPlayerForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={AllPlayers} />
          <Route path="/players/:id" component={PlayerDetails} />
          <Route path="/create" component={NewPlayerForm} />
          {/* Add additional routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;