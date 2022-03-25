import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './Views/Main';
import Teams from './Views/Teams';
import TeamDetails from './Views/TeamDetails';
import Players from './Views/Players';
import PlayerDetails from './Views/PlayerDetails';
import Header from './services/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>Kickball League</h1>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/teams">
            <Teams />
          </Route>
          <Route exact path="/teams/:id">
            <TeamDetails />
          </Route>
          <Route exact path="/players">
            <Players />
          </Route>
          <Route exact path="/players/:id">
            <PlayerDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
