import { Route, Switch } from 'react-router-dom';
import Flights from './pages/Flights';
import Login from './pages/Login';

const App = () => (
  <>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/flights">
        <Flights />
      </Route>
    </Switch>
  </>
);

export default App;
