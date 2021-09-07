import React, { useEffect, useState } from 'react';
import Allnews from '../components/Body/Allnews';
import NewsDetails from '../components/Body/NewsDetails';

const Body = () => {
    const [news, setNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null);

    useEffect(() => {
        fetch('https://warm-ocean-89697.herokuapp.com/allnews')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    const newsSelect = (newsselected) => {
        console.log(newsselected)
        setSelectedNews({ 
            selectedNews: newsselected
        
        })
    }

    let newsDetail = null;
    if (selectedNews != null) {
        newsDetail = <NewsDetails newsdata={selectedNews} />
    }

    return (
        <div className="container text-center mt-5">
            <div className='row'>
                <div className="col">
                {
                    news.map(newsdata => <Allnews
                        newsdata={newsdata}
                        key={newsdata._id}
                        newsSelect={() => newsSelect(newsdata)}
                    />)
                }
                </div>
                <div className="col">
                {newsDetail}
                </div>
            </div>
        </div>
    );
};

export default Body;