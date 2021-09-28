import { Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';

const App = () => (
  <>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/hotels">
        <Index />
      </Route>
    </Switch>
  </>
);

export default App;
