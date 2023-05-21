import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Data from '../data/Data';
import ReactMarkdown from 'react-markdown'
import { Alert, Container } from 'react-bootstrap';

const Content = ({
    selectedCategory,
    selectedContent,
    setPageType
}) => {
    const [isError, setIsError] = useState(false);
    const [contentData, setContentData] = useState(false);
    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
        setIsError(false);
        const cd = Data.find((d) => d.name === selectedCategory);
        const contD = cd.categories.find((c) => c.name === selectedContent);
        if(contD.content.length === 0){
            setIsError(true);
        }
        fetch(contD.content)
        .then (response => response.text())
        .then (text => {
            setMarkdown(text);
        });
        setContentData(contD);

    }, [selectedCategory, selectedContent]);
    return (
        <div>
            {isError && 
            <Container>
                <Alert variant="danger">
                    <span>
                        <b>Error</b> - file not found!<br />
                        Please report any issues <a href="https://github.com/JD-Spooky/resus/issues">here</a>
                    </span>
                </Alert>
            </Container>}
            {!isError && markdown && 
             <ReactMarkdown children={markdown}/>
            }
        </div>
    );
}

export default Content;