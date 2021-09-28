import { Route, Switch } from 'react-router-dom';
import Hotels from './pages/Hotels';
import Login from './pages/Login';

const App = () => (
  <>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/hotels">
        <Hotels />
      </Route>
    </Switch>
  </>
);

export default App;
