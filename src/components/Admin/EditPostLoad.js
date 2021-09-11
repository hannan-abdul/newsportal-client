import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import EditPost from './EditPost';
import './Postwrite.css';

const EditPostLoad = () => {
    const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://warm-ocean-89697.herokuapp.com/allnews')
      .then(res => res.json())
      .then(data => setNews(data))
  }, [])

    return (
        <div className='container'>
            <div className="row">
                {
                    news.map(newsDataEdit=><EditPost 
                        newsDataEdit={newsDataEdit}
                        key={newsDataEdit._id}
                        />)
                }
            </div>
        </div>
    );
};

export default EditPostLoad;