import React, { useEffect, useState } from 'react';
import EditPost from './EditPost';
import EveryNews from './EveryNews';

const ManageNews = () => {
    const [news, setNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null);

    useEffect(() => {
        fetch('https://warm-ocean-89697.herokuapp.com/allnews')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    const newsSelect = (newsselected) => {
        // console.log(newsselected)
        setSelectedNews({ 
            selectedNews: newsselected
        
        })
    }

    let newsDetail = null;
    if (selectedNews != null) {
        newsDetail = <EditPost newsdata={selectedNews} />
    }

    return (
        <div className="container">
            <div className="row">
                <div className='col-6'>
                    {
                        news.map(newsdata => <EveryNews
                            newsdata={newsdata}
                            key={newsdata._id}
                            newsSelect={() => newsSelect(newsdata._id)}
                        />)
                    }
                </div>
                <div className="col-6">
                    {newsDetail}
                </div>
            </div>
        </div>
    );
};

export default ManageNews;