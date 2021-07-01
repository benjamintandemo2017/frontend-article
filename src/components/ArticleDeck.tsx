import ArticleCard from './ArticleCard';
import CardDeck from "react-bootstrap/CardDeck";
import React, { Component } from "react";
  
// Props
// actor. an instance of ActorModel
export default class ArticleDeck extends Component {  
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {        
        const _cardText = "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.";
        const _textMore = "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae.";
        
        const _cardDate1 = "12 Sep, 2018";
        const _cardTitle1 = "Love of learning, art keys to a great year of Gwen";

        const _cardDate2 = "28 Sep, 2018";
        const _cardTitle2 = "Curious mind leads the way for Jill";

        const _cardDate3 = "12 Sep, 2018";
        const _cardTitle3 = "Celebrating our volunteers";

        return (
            <div>
                <CardDeck className="App-Card-Deck">
                    <ArticleCard date={_cardDate1} title={_cardTitle1} text={_cardText} additionalText={_textMore}></ArticleCard>
                    <ArticleCard date={_cardDate2} title={_cardTitle2} text={_cardText} additionalText={_textMore}></ArticleCard> 
                    <ArticleCard date={_cardDate3} title={_cardTitle3} text={_cardText} additionalText={_textMore}></ArticleCard>
                </CardDeck>
            </div>
        );
    }
}
