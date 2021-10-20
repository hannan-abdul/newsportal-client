import React, { useEffect, useState } from 'react';
import Allnews from '../../components/Body/Allnews';
import './Body.css'

const Body = () => {
    const [newsdata, setNewsdata] = useState([]);
    const [categoryItem, setCategoryItem] = useState([]);

    useEffect(() => {
        // https://warm-ocean-89697.herokuapp.com
        fetch('http://localhost:5050/api/news/allnews')
            .then(res => res.json())
            .then(data => setNewsdata(data))
        // .then(data => setNewsdata(data.slice(0, 2)))
    }, [categoryItem])

    const filterItem = (categoryItem) =>{
        const updatedItems = newsdata.filter((curElem) => {
          return curElem.category === categoryItem;
        })
        setNewsdata(updatedItems)
      }

    return (
        <div className="container text-center mt-5">
            <div>
                <button className="btn btn-secondary ms-2 mb-2" onClick={() => setNewsdata(newsdata)}>All News</button>
                <button className="btn btn-secondary ms-2 mb-2" onClick={() => filterItem('Business')}>Business</button>
                <button className="btn btn-secondary ms-2 mb-2" onClick={() => filterItem('Entertainment')}>Entertainment</button>
                <button className="btn btn-secondary ms-2 mb-2" onClick={() => filterItem('Politics')}>Politics</button>
                <button className="btn btn-secondary ms-2 mb-2" onClick={() => filterItem('Sports')}>Sports</button>
                <button className="btn btn-secondary ms-2 mb-2" onClick={() => filterItem('International')}>international</button>
                <button className="btn btn-secondary ms-2 mb-2" onClick={() => filterItem('Other')}>Other</button>
            </div>
            <div className='row justify-content-between'>
                {
                    newsdata.map(newdata =>
                        <div className="col-lg-5 col-md-4 col-sm-12 card-fix">
                            <Allnews
                                newdata={newdata}
                                key={newdata._id} />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Body;
