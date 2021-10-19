import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SideBar from '../SideBar/SideBar';
import SingleNews from './SingleNews';

const NewsDetails = () => {
    const { newsKey } = useParams();
    const [newdata, setNewsdata] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/api/news/' + newsKey)
            .then(res => res.json())
            .then(data => setNewsdata(data))
    }, [newsKey])
    return (
        <div className="container d-flex">
            <div className="col-9">
                <SingleNews newdata={newdata}></SingleNews>
            </div>
            <div className="col-3">
                <SideBar />
            </div>
        </div>
    );
};

export default NewsDetails;