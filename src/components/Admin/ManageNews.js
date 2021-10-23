import React from 'react';
import { useSelector } from 'react-redux';
import DashboardMenu from '../Dashboard/DashboardMenu/DashboardMenu';
import EveryNews from './EveryNews';

const ManageNews = () => {
    const newsDatas = useSelector((state)=> state.newsdata.allnewsdetails);

    return (
        <section>
            <div>
                <DashboardMenu />
            </div>
            <div className="container text-center mt-5 col-md-10 p-4 pr-5" style={{ position: "absolute", right: "-5%", top: "10%", backgroundColor: "#F4FDFB" }}>
                <h3>Manage News</h3>
                {
                    newsDatas.map(newdata => <EveryNews newdata={newdata} />)
                }

            </div>
        </section>
    );
};

export default ManageNews;