import './App.css';
import Home from '../src/pages/Home/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from './components/Home/Navigation';
import Login from './components/authentication/Login';
import PrivateRoute from './components/authentication/PrivateRoute';
import NewsDetails from './components/Body/NewsDetails';
import Postwrite from './components/Admin/Postwrite';
import ManageNews from './components/Admin/ManageNews';
import SignUp from './components/authentication/SignUp';
import About from './pages/Home/About/About';
import Contact from './pages/Home/Contact/Contact';

function App() {
  return (
    <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <PrivateRoute path="/write-news">
              <Postwrite />
            </PrivateRoute>
            <Route path="/newsdetail/:newsKey">
              <NewsDetails />
            </Route>
            <Route path="/manage-news">
              <ManageNews />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
