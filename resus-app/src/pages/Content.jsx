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

    useEffect(() => {
        const cd = Data.find((d) => d.name === selectedCategory);
        const contD = cd.categories.find((c) => c.name === selectedContent);
        setContentData(contD);

    }, [selectedCategory, selectedContent]);
    return (
        <div>
            <h4>Content Page</h4>
            {contentData && 
             <ReactMarkdown children={contentData.content}/>
            }
        </div>
    );
}

export default Content;