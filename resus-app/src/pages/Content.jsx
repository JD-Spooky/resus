import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Data from '../data/Data';
import ReactMarkdown from 'react-markdown'

const Content = ({
    selectedCategory,
    selectedContent,
    setPageType
}) => {

    const [contentData, setContentData] = useState(false);
    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
        const cd = Data.find((d) => d.name === selectedCategory);
        const contD = cd.categories.find((c) => c.name === selectedContent);
        fetch(contD.content)
        .then (response => response.text())
        .then (text => {
            setMarkdown(text);
        });
        setContentData(contD);

    }, [selectedCategory, selectedContent]);
    return (
        <div>
            {markdown && 
             <ReactMarkdown children={markdown}/>
            }
        </div>
    );
}

export default Content;