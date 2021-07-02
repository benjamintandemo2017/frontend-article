import React from 'react';
import './App.css';
import ArticleDeck from './components/ArticleDeck';
import * as Constants from './common/Constants';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <div className="App-header">        
        <h1 className="App-title">{Constants.mainTitle}</h1>
        <div className="App-text">
            {Constants.mainText}
        </div>      
        <ArticleDeck></ArticleDeck>  
      </div>
        
    </div>
  );
}

export default App;
