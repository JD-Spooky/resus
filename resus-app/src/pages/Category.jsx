import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import PageTypes from '../constants/PageTypes';
import Data from '../data/Data';


const Category = ({selectedCategory, setPageType, setContent}) => {
    
    const [catData, setCatData] = useState(false);

    useEffect(() => {
        console.log(selectedCategory);
        const cd = Data.find((d) => d.name === selectedCategory);
        console.log(catData);
        setCatData(cd);
    }, [selectedCategory]);

    const selectContent = (value) => {
        setContent(value);
        setPageType(PageTypes.CONTENT);
    };

    return (
    <div>
        <h4>Category Page</h4>
        <div className='m-3'>
        <Row>
        { catData && catData.categories.map((item) => (
            <Col xs="2">
                <Card style={{cursor:'pointer'}} key={item.name} onClick={() => selectContent(item.name)}>
                    <Card.Body className="text-center">
                        <b>{item.name}</b>
                    </Card.Body>
                </Card>
            </Col>
        )) }
        </Row>
        </div>
    </div>
)
};

export default Category;