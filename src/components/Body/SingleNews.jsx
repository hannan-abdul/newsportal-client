import React from 'react';
import './SingleNews.css';

const SingleNews = ({ newdata }) => {
    const { title, author, description, category, photo } = newdata;
    return (
        <div className="single-news-fix">
            <h1>{title}</h1>
            <div className="py-4">
                <img src={photo} alt="photo" />
            </div>
            <h5>Author: {author}</h5>
            <h6>Category: {category}</h6>
            <p>{description}</p>

        </div>
    );
};

export default SingleNews;