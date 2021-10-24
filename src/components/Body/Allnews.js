import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Allnews = ({ newdata }) => {
    const { title, photo, category, author, createdAt, _id } = newdata;
    
    return (
        <div className=''>
            <img style={{ "width": "100%" }} src={photo} alt="new image" />
            <h4>{title}</h4>
            <div className='d-flex justify-content-between'>
                <div><p>By: {author}</p></div>
                <div><p>{new Date(createdAt).toDateString()}</p></div>
            </div>
            <h5>{category}</h5>
            <Button className="primary"><Link to={"/newsdetail/" + _id}>Read More</Link>
            </Button>
        </div>
    );
};

export default Allnews;
