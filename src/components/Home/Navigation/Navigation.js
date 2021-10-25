import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './Navigtion.css';

const Navigation = () => {
    const email = useSelector((state) => state.auth.userdetails.email);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a class="navbar-brand" href="/">Daily News</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item nav-fix">
                            <Link className="nav-link me-2" to="/">Home</Link>
                        </li>
                        <li className="nav-item nav-fix">
                            <Link className='nav-link me-2' to='/about'>About</Link>
                        </li>
                        <li className="nav-item nav-fix">
                            <Link className='nav-link me-2' to='/contact'>Contact</Link>
                        </li>
                        <li className="nav-item nav-fix">
                            <Link className='nav-link me-2' to="/dashboard/write-news">Write</Link>
                        </li>
                        <li className="nav-item nav-fix">
                            <Link className="nav-link me-2" to="/dashboard/write-news">Dashboard</Link>
                        </li>
                        {
                            email ?
                                <li className="nav-item auth">
                                    <Link className="nav-link me-2">Logout</Link>
                                </li>
                                :
                                <li className="nav-item auth">
                                    <Link className="nav-link me-2" to="/login">Login</Link>
                                </li>
                        }
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navigation;