import React, { useEffect, useState } from 'react';
import ManageNews from './ManageNews';

const Admin = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://warm-ocean-89697.herokuapp.com/allnews')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <div className="container">
            <div className='row'>
                {
                    news.map(newsdata => <ManageNews
                        newsdata={newsdata}
                        key={newsdata._id}
                    />)
                }
            </div>
        </div>
    );
};

export default Admin;