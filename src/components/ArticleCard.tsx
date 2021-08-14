import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState }  from 'react';
import { Article } from '../common/articles';

  
// Props
interface IArticleCardProps {   
    article: Article
}

// actor. an instance of ActorModel
const ArticleCard: React.FunctionComponent<IArticleCardProps> = (props) => { 
    const [isReadMore, setIsReadMore] = useState(false);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (                          
        <Card className={props.article.cardClass}>    
            <Card.Header className="App-card-header">
                <p>{props.article.date}</p>
            </Card.Header>
            <Card.Body className="App-card-body">
                <Card.Title>{props.article.title}</Card.Title>
                <Card.Text className="App-card-text">                    
                    { isReadMore ? <span>{props.article.text}</span> : <span> {props.article.text.substr(0,55) + '...'}</span> }                
                </Card.Text>            
            </Card.Body>   
            <Card.Footer>
                <Button className="btn-read-more" onClick={toggleReadMore}>{ !isReadMore ? 'READ MORE' : 'READ LESS' } </Button>
            </Card.Footer>                     
        </Card>
    );    
};

export default ArticleCard;
