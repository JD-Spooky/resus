import React from 'react';
import PageTypes from '../constants/PageTypes';
import Data from '../data/Data';
import { Card, Row, Col } from 'react-bootstrap';

const Home = ({ setPageType, setCategory }) => {

    const selectCategory = (value) => {
        setCategory(value);
        setPageType(PageTypes.CATEGORY);
    };

    return (
        <div>
            <h3>Paeds E-Resus</h3>
            <Row className="p-5">
            {Data.map((cat) => (
                <Col className="p-0 mb-4" xs="4" md="3">
                <Card onClick={() => selectCategory(cat.name)} key={cat.name} style={{ cursor:'pointer', width: '18rem' }}>
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