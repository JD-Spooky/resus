import React from 'react';
import PageTypes from '../constants/PageTypes';
import Data from '../data/Data';
import { Button, Card, Row, Col } from 'react-bootstrap';

const Home = ({ setPageType, setCategory }) => {

    const selectCategory = (value, url) => {
        if(url) {
            window.open(url, '_self');
            return;
        }
        setCategory(value);
        setPageType(PageTypes.CATEGORY);
    };

    const selectAllContent = () => {
        setPageType(PageTypes.ALL_CONTENT);
    };

    return (
        <div>
            <h4>Paeds E-Resus</h4>
            <Button onClick={() => selectAllContent()} type="button" variant="primary"><h4>A - Z</h4></Button>
            <Row className="p-5">
            {Data.map((cat) => (
                <Col className="p-0 mb-4" xs="4" md="3">
                <Card onClick={() => selectCategory(cat.name, cat.url)} key={cat.name} style={{ cursor:'pointer', width: '18rem' }}>
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