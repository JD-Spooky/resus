import React, { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Data from "../data/Data";
import PageTypes from "../constants/PageTypes";

const AllContent = ({ setContent, setPageType, setCategory }) => {
    const [parsedData, setParsedData] = useState(false);
    
    useEffect(() => {
        const list = {};
        Object.values(Data).forEach((cat, index) => {
            if(!cat.categories) return;
                cat.categories.forEach((c) => {
                c.category = Data[index].name;
                const firstLetter = c.name.charAt(0);
                if(!list[firstLetter]) list[firstLetter] = [];
                if(!list[firstLetter].find((d) => d.name === c.name)){
                    list[firstLetter].push(c);
                }
               
            })
        });
        setParsedData(list);
    }, []);

    const selectContent = (value, category) => {
        setContent(value);
        setCategory(category)
        setPageType(PageTypes.CONTENT);
    };

    return (
        <div className="container">
            { parsedData && Object.keys(parsedData).map((letter) => (
                <div key={letter}>
                    <h4>{letter}</h4>
                    {parsedData[letter].map((content) => (
                          <Card key={content.name} className="mb-3" style={{cursor:'pointer'}} onClick={() => selectContent(content.name, content.category)}>
                          <Card.Body className="text-center">
                              <b>{content.name}</b>
                          </Card.Body>
                        </Card>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default AllContent;