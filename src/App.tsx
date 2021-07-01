import React from 'react';
import './App.css';
import ArticleDeck from './components/ArticleDeck';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <div className="App-header">        
        <h1 className="App-title">Related Articles</h1>
        <div className="App-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </div>      
        <ArticleDeck></ArticleDeck>  
      </div>
        
    </div>
  );
}

export default App;
