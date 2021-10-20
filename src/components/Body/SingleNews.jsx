import React from 'react';
import './SingleNews.css';

const SingleNews = ({ newdata }) => {
    const { title, author, description, category, photo, createdAt } = newdata;
    return (
        <div className="single-news-fix">
            <h1>{title}</h1>
            <div className="py-4">
                <img src={photo} alt="photo" />
            </div>
            <div className="d-flex justify-content-between">
                <div className="text-start">
                    <h5>Author: {author}</h5>
                    <h6>Category: {category}</h6>
                </div>
                <div>
                    <span>{new Date(createdAt).toDateString()}</span>
                </div>
            </div>

            <p>{description}</p>

        </div>
    );
};

export default SingleNews;