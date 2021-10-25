import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './AllNews.css';

const Allnews = ({ newdata }) => {
    const { title, photo, category, author, createdAt, _id } = newdata;

    return (
        <div className='text-start'>
            <img className="all-img-fix" src={photo} alt="new image" />
            <h4><Link className="text-decoration-none text-black all-img-title" to={"/newsdetail/" + _id}>{title}</Link></h4>
            
            <div className='d-flex justify-content-between'>
                <div><p>By: {author}</p></div>
                <div><p>{new Date(createdAt).toDateString()}</p></div>
            </div>
            <h5>{category}</h5>
            {/* <Button className="primary">
                <Link className="text-decoration-none text-white" to={"/newsdetail/" + _id}>View Post</Link>
            </Button> */}
        </div>
    );
};

export default Allnews;
