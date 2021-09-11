import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Home/Navigation';
import Login from './components/authentication/Login';
import { createContext, useState } from 'react';
import Admin from './components/Admin/Admin';
import PrivateRoute from './components/Home/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
