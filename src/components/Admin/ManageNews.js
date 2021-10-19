import React, { useEffect, useState } from 'react';
import DashboardMenu from '../Dashboard/DashboardMenu/DashboardMenu';
import EveryNews from './EveryNews';

const ManageNews = () => {
    const [newsdata, setNewsdata] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5050/api/news/allnews')
            .then(res => res.json())
            .then(data => setNewsdata(data))
    }, [])
    return (
        <section>
            <div>
                <DashboardMenu />
            </div>
            <div className="container text-center mt-5 col-md-10 p-4 pr-5" style={{ position: "absolute", right: "-5%", top: "10%", backgroundColor: "#F4FDFB" }}>
                <h3>Manage News</h3>
                {
                    newsdata.map(newdata => <EveryNews newdata={newdata} />)
                }

            </div>
        </section>
    );
};

export default ManageNews;