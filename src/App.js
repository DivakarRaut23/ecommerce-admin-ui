import Login from './pages/login/Login'
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import PasswordReset from './pages/password-reset/PasswordReset';

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/reset-password">
            <PasswordReset/>
          </Route> 
          <Route path="/">
            <Login />
          </Route> 
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
