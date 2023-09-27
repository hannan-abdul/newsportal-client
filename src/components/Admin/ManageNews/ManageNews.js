import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DashboardMenu from '../../Dashboard/DashboardMenu/DashboardMenu';
import EveryNews from '../EveryNews/EveryNews';

const ManageNews = () => {
    const [managenews, setManagenews]=useState([]);

    useEffect(() => {
        const getAllNews = async () => {
            try {
                const res = await axios.get('https://newsportal-server-i4kcjaat3-shohas563-gmailcom.vercel.app/api/news/allnews');
                setManagenews(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getAllNews()
    }, [managenews])

    return (
        <section>
            <div>
                <DashboardMenu />
            </div>
            <div className="container text-center mt-5 col-md-10 p-4 pr-5" style={{ position: "absolute", right: "-5%", top: "10%", backgroundColor: "#F4FDFB" }}>
                <h3>Manage News</h3>
                {
                    managenews.map(newdata => <EveryNews newdata={newdata} />)
                }
            </div>
        </section>
    );
};

export default ManageNews;
