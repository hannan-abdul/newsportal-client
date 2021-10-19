import './App.css';
import Home from '../src/pages/Home/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from './components/Home/Navigation';
import Login from './components/authentication/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Home/PrivateRoute';
import NewsDetails from './components/Body/NewsDetails';
import Postwrite from './components/Admin/Postwrite';
import ManageNews from './components/Admin/ManageNews';

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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/write-news">
              <Postwrite />
            </Route>
            <Route path="/newsdetail/:newsKey">
              <NewsDetails />
            </Route>
            <Route path="/manage-news">
              <ManageNews />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
