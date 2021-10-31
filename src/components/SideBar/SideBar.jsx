import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'

const SideBar = () => {
    const location = useLocation();
    const Path = location.pathname.split('/')[1];
    const [categories, setCategories]= useState([])

    useEffect(() => {
        const getAllCategory = async () => {
            try {
                const res = await axios.get('https://warm-ocean-89697.herokuapp.com/api/categories/all');
                setCategories(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getAllCategory()
    }, [Path, categories])
    
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
                    <Link to="/"><li>All</li></Link>
                    {
                        categories.map(catdata => <Link to={`/category/${catdata.name.replace("&", "")}`}><li>{catdata.name}</li></Link>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default SideBar;