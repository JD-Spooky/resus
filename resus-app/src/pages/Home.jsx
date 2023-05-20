import React from 'react';
import PageTypes from '../constants/PageTypes';
import Data from '../data/Data';

const Home = ({setPageType, setCategory}) => {

    const selectCategory = (value) => {
        setCategory(value);
        setPageType(PageTypes.CATEGORY);
    };

    return (
    <div>
        <h4>Home Page</h4>
        {Data.map((cat) => (
            <div onClick={() => selectCategory(cat.name)} key={cat.name}>
                {cat.name}
            </div>
        ))}
    </div>
)
};

export default Home;