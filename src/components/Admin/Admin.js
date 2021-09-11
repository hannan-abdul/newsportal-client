import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Postwrite from './Postwrite';
import EditPost from './EditPost';
import ManageNews from './ManageNews';

const Admin = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/managenews">Manage Product</Link>
                    </li>
                    <li>
                        <Link to="/write">New Post</Link>
                    </li>
                    <li>
                        <Link to="/edit">Edit Post</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route path="/managenews">
                        <ManageNews />
                    </Route>
                    <Route path="/write">
                        <Postwrite />
                    </Route>
                    <Route path="/edit">
                        <EditPost />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Admin;