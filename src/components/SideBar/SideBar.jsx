import React from 'react';
import './Sidebar.css'

const SideBar = () => {
    return (
        <div className='right-sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                    alt=""
                />
                <p className="text-start">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit enim sint tempore suscipit sunt ullam itaque repellendus doloribus modi autem?
                </p>
            </div>
            <div className="sidebarItem text-start">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList text-start">
                    <li>Business</li>
                    <li>Entertainment</li>
                    <li>Politics</li>
                    <li>Sports</li>
                    <li>International</li>
                    <li>Other</li>
                    {/* {
                        cats.map((c) => (
                            <Link className="link" to={`/?cat=${c.name}`}>
                                <li className="sidebarListItem">{c.name}</li>
                            </Link>
                        ))
                    } */}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
};

export default SideBar;