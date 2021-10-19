import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import './banner.css';


const Banner = () => {
    return (
        <div>
            <Container className='mt-4'>
                <Row>
                    <Col>
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
                </Row>
            </Container>
        </div>
    );
};

export default Banner;