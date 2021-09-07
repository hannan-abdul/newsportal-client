import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Postwrite from './components/Body/Postwrite';
import Navigation from './components/Home/Navigation';
import Login from './components/authentication/Login';

function App() {
  return (
    <div className="App">
      <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/write" component={Postwrite} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
