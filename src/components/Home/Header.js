import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className="headerTitles">
                    <span className="headerTitleSm">Daily</span>
                    <span className="headerTitleLg">Newsportal</span>
                </div>
                <img
                    className='headerImg'
                    src="https://images.pexels.com/photos/3626734/pexels-photo-3626734.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    alt="" />
            </div>
        </div>
    );
};

export default Header;