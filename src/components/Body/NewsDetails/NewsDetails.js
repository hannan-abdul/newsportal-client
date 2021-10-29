import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SideBar from '../../SideBar/SideBar';
import SingleNews from '../SingleNews/SingleNews';
import './NewsDetails.css';

const NewsDetails = () => {
    const { newsKey } = useParams();
    const [newdata, setNewsdata] = useState([]);

    useEffect(() => {
        const getSingleNews = async () => {
            try {
                const res = await axios.get('https://warm-ocean-89697.herokuapp.com/api/news/' + newsKey);
                setNewsdata(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getSingleNews()
    }, [newsKey])

    return (
        <div className="container d-flex">
            <div className="col-md-9">
                <SingleNews newdata={newdata}></SingleNews>
            </div>
            <div className="col-md-3 post-sidebar-fix">
                <SideBar />
            </div>
        </div>
    );
};

export default NewsDetails;