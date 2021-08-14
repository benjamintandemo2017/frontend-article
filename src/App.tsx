import React from 'react';
import './App.css';
import ArticleDeck from './components/ArticleDeck';
import * as Constants from './common/Constants';
import { articles } from './common/articles';

const App = (): JSX.Element => {
 console.log(articles);
  return (
    <div className="App">
      <div className="App-header">        
        <h1 className="App-title">{Constants.mainTitle}</h1>
        <div className="App-text">
            {Constants.mainText}
        </div>      
        <ArticleDeck dataSource={articles} ></ArticleDeck>  
      </div>
        
    </div>
  );
}

export default App;
