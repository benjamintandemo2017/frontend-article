import ArticleCard from './ArticleCard';
import CardDeck from 'react-bootstrap/CardDeck';
import React, { Component } from 'react';
  
// Props
interface IArticleDeckProps {
    dataSource: { date: string; title: string; text: string; cardClass: string; }[]
}

// actor. an instance of ActorModel
export default class ArticleDeck extends Component<IArticleDeckProps> {  
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {      
        const dataSource = this.props.dataSource; 
        const articleCards = dataSource.map((item, i) =>           
            <ArticleCard key={i} article={item} />
        ); 
        console.log(articleCards);
        return (
            <div>
                <CardDeck className="App-card-deck">
                    {articleCards}                    
                </CardDeck>
            </div>
        );
    }
}
