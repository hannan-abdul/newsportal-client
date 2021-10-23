import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link class="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link me-2" to="/">Home</Link>
                        </li>
                        <li className="topListItem"><Link className='nav-link me-2' to='/about'>About</Link></li>
                        <li className="topListItem"><Link className='nav-link me-2' to='/contact'>Contact</Link></li>
                        <li className="topListItem"><Link className='nav-link me-2' to="/write-news">Write</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link me-2" to="/write-news">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-2" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-2">Logout</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navigation;