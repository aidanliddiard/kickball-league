import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './Views/Main';
import Teams from './Views/Teams';
import TeamDetails from './Views/TeamDetails';

function App() {
  return (
    <BrowserRouter>
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
