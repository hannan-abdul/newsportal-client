import React, { useEffect, useState } from 'react';
import Allnews from '../../components/Body/Allnews';
import './Body.css'

const Body = () => {
    const [newsdata, setNewsdata] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5050/api/news/allnews')
            .then(res => res.json())
            .then(data => setNewsdata(data))
    }, [])

    return (
        <div className="container text-center mt-5">
            <div className='row justify-content-start'>
                {
                    newsdata.map(newdata => 
                        <div className="col-lg-4 col-md-4 col-sm-12 card card-fix">
                        <Allnews 
                        newdata={newdata} 
                        key={newdata._id}/>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Body;