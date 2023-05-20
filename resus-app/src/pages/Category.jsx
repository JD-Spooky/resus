import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
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
        { catData && catData.categories.map((item) => (
            <div key={item.name} onClick={() => selectContent(item.name)}>{item.name}</div>
        )) }
    </div>
)
};

export default Category;