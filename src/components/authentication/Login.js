import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import firebaseConfig from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import { useDispatch } from 'react-redux';
import { customAuthAction, googleAuthAction } from '../../Redux/action/authAction';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

// Google Login 
const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { handleSubmit, register } = useForm();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // email login 
    const onSubmit = async (data) => {
        const userData = {
            email: data.email,
            password: data.password,
        }
        setLoading(true);
        try {
            const res = await axios({
                method: 'post',
                url: 'https://warm-ocean-89697.herokuapp.com/api/auth/login',
                data: userData
            });
            console.log(res);
            dispatch(customAuthAction(res.data.others));
            if (res) {
                // history.replace(from);
                history.replace(from)
            }
        } catch (err) {
            setError(true);
            setLoading(false);
            console.log(err);
        }
    }

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = async () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const { email, displayName, photoURL } = result.user;
                setUser({
                    email,
                    displayName,
                    photoURL,
                    role: 'user',
                    token,
                })
                const signInUser = { email };
                dispatch(googleAuthAction({
                    email,
                    displayName,
                    photoURL,
                    role: 'user',
                    token
                }));
                if (signInUser) {
                    history.push(from)
                }

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    return (
        <div className="text-center container mt-3 login-fix">
            <div className="form-fix">
                <h3 className="mt-3">You Must Log In</h3>
                <button className="inner-button-fix" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /> Google Sign In</button>
                <div>
                    <div className="mb-3">
                        Login With Email
                    </div>
                    <div className="mt-8">
                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                            <div className="mb-2">
                                <div className="flex relative ">
                                    <input defaultValue="test@admin.com" {...register("email")} type="text" id="sign-in-email" className="border py-2 px-4" placeholder="Your email" />
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <div className="flex relative ">
                                    <input defaultValue="123456" {...register("password")} type="password" id="sign-in-email" className="border py-2 px-4" placeholder="Your password" />
                                </div>
                            </div>
                            <div className="flex items-center mb-6 -mt-4">
                                <div className="flex ml-auto mb-2 mt-2">
                                    <Link to="/">
                                        Forgot Your Password?
                                    </Link>
                                </div>
                            </div>
                            <div class="flex w-full">
                                <button type="submit" class="py-2 px-4 rounded">
                                    {loading ? <div className="spinner-border" role="status">
                                        <span class="visually-hidden"></span>
                                    </div> : "Login"
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                    {error && <span style={{ color: 'red', marginTop: '10px' }}>Something went wrong!</span>}
                    <div className="mt-6">
                        <Link to="/signup" className="">
                            <span className="ml-2">
                                You don't have an account?
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
