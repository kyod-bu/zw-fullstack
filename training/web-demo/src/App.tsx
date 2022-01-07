import {
  BrowserRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom';
import Login from './pages/login';
import FormAdmin from './pages/formAdmin';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/formAdmin" component={FormAdmin} />
      <Redirect from="/*" to="/login" />
    </Router>
  );
}

export default App;
