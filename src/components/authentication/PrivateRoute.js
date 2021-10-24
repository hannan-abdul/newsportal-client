import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
    const email = useSelector((state) => state.auth.userdetails.email)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;