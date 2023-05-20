import React, { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Data from "../data/Data";
import PageTypes from "../constants/PageTypes";

const AllContent = ({ setContent, setPageType }) => {
    const [parsedData, setParsedData] = useState(false);
    
    useEffect(() => {
        const list = {};
        Data.forEach((cat) => cat.forEach((c) => {
            const firstLetter = c.name.charAt(0);
            if(!list[firstLetter]) list[firstLetter] = [];
            list[firstLetter].push(c);
        }));
        setParsedData(list);
    }, []);

    const selectContent = (value) => {
        setContent(value);
        setPageType(PageTypes.CONTENT);
    };

    return (
        <div>
            { parsedData && Object.keys(parsedData).map((letter) => (
                <>
                    <h4>{letter}</h4>
                    {parsedData[letter].map((content) => (
                          <Card style={{cursor:'pointer'}} key={content.name} onClick={() => selectContent(content.name)}>
                          <Card.Body className="text-center">
                              <b>{content.name}</b>
                          </Card.Body>
                        </Card>
                    ))}
                </>
            ))}
        </div>
    );
};

export default AllContent;