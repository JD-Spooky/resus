import React from 'react';
import PageTypes from '../constants/PageTypes';
import Data from '../data/Data';
import { Card, Row, Col } from 'react-bootstrap';

const Home = ({ setPageType, setCategory }) => {

    const selectCategory = (value, url) => {
        if(url) {
            window.open(url, '_self');
            return;
        }
        setCategory(value);
        setPageType(PageTypes.CATEGORY);
    };

    return (
        <div>
            <Row className="p-5">
            {Data.map((cat) => (
                <Col key={cat.name} className="p-1 mb-4" xs="12" sm="6" md="4" lg="3">
                <Card onClick={() => selectCategory(cat.name, cat.url)} key={cat.name} style={{ cursor:'pointer' }}>
                    <Card.Img className="responsive-img" variant="top" src={cat.image} />
                    <Card.Body>
                        <Card.Title>{cat.name}</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </div>
    )
};

export default Home;