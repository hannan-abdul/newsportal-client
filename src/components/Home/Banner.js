import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import banner1 from '../../assets/images/banner1.png';
import banner2 from '../../assets/images/banner2.png';
import Postwrite from '../Body/Postwrite';
import './banner.css';


const Banner = () => {
    return (
        <div>
            <Container className='mt-4'>
                <Row>
                    <Col lg={9}>
                        <div className="left">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={banner1}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slider</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={banner2}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Second slider</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="right">
                            <h2>Top News</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;