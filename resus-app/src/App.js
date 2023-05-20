import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PageTypes from './constants/PageTypes';
import Home from './pages/Home';
import Category from './pages/Category';
import Content from './pages/Content';
import PageLayout from './components/PageLayout';
import AllContent from './pages/allContent';

const App = () => {
  const [ selectedCategory, setCategory ] = useState(false);
  const [ selectedContent, setContent] = useState(false);
  const [ pageType, setPageType ] = useState(PageTypes.HOME);
  return (
    <div className="App">
      <PageLayout pageType={pageType} setPageType={setPageType}>
      {
        pageType === PageTypes.ALL_CONTENT && <AllContent setPageType={setPageType} setCategory={setCategory} />
      }
      {
        pageType === PageTypes.HOME && <Home setPageType={setPageType} setCategory={setCategory} />
      }
      {
        pageType === PageTypes.CATEGORY && <Category selectedCategory={selectedCategory} setPageType={setPageType} setContent={setContent}/>
      }
      {
        pageType === PageTypes.CONTENT && <Content selectedCategory={selectedCategory} selectedContent={selectedContent} setPageType={setPageType} setContent={setContent}/>
      }
      </PageLayout>
    </div>
  );
}

export default App;