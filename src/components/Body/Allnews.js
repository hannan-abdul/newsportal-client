import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'reactstrap';

const Allnews = (props) => {
    const { title, imageURL} = props.newsdata;
    return (
        <div className='col'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Button onClick={props.newsSelect} variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Allnews;