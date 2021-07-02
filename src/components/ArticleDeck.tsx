import ArticleCard from './ArticleCard';
import CardDeck from 'react-bootstrap/CardDeck';
import React, { Component } from 'react';
import * as Constants from '../common/Constants';
  
// Props
// actor. an instance of ActorModel
export default class ArticleDeck extends Component {  
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {        
        return (
            <div>
                <CardDeck className="App-card-deck">
                    <ArticleCard date={Constants.cardDate1} title={Constants.cardTitle1} text={Constants.cardText1} additionalText={Constants.textMore1} cardClass={Constants.cardClass1}></ArticleCard>
                    <ArticleCard date={Constants.cardDate2} title={Constants.cardTitle2} text={Constants.cardText2} additionalText={Constants.textMore2} cardClass={Constants.cardClass2}></ArticleCard> 
                    <ArticleCard date={Constants.cardDate3} title={Constants.cardTitle3} text={Constants.cardText3} additionalText={Constants.textMore3} cardClass={Constants.cardClass3}></ArticleCard>
                </CardDeck>
            </div>
        );
    }
}
