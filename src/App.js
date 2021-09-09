import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Postwrite from './components/Body/Postwrite';
import Navigation from './components/Home/Navigation';
import Login from './components/authentication/Login';
import { createContext, useState } from 'react';
import Admin from './components/Admin/Admin';
export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/write" component={Postwrite} />
            <Route path="/admin" component={Admin} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
        </UserContext.Provider>
    </div>
  );
}

export default App;
