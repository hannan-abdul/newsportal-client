import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Allnews = ({newdata}) => {
    const { title, photo, category, _id} = newdata;
    // console.log(newdata)
    return (
        <div className=''>
            <img style={{"width": "100%"}} src={photo} alt="image" />
            <h3>{title}</h3>
            <h4>{category}</h4>
            <Button className="primary"><Link to={"/newsdetail/"+ _id}>Read More</Link>
            </Button>
        </div>
    );
};

export default Allnews;
