import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

const App = () => (
  <>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
    </Switch>
  </>
);

export default App;
