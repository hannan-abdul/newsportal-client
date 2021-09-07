import React from 'react';
import {Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';

const NewsDetails = (props) => {
    const {title, imageURL, description, author} = props.newsdata.selectedNews;
    // console.log(props)
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardImg src={imageURL} />
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle><h2>Title: {title}</h2></CardTitle>
                    <CardText><strong>News details:</strong> {description}</CardText>
                    <CardText><strong>Author Name:</strong> {author}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default NewsDetails;