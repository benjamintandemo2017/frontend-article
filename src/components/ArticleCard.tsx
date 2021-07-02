import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState }  from 'react';

interface articleCardProps {
    date: string;
    title: string;
    text: string;
    additionalText: string;
    cardClass: string;
}
  
// Props
// actor. an instance of ActorModel
const ArticleCard: React.FunctionComponent<articleCardProps> = ({ date, title, text, additionalText, cardClass }) => { 
    const [isReadMore, setIsReadMore] = useState(false);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (                          
        <Card className={cardClass}>    
            <Card.Header className="App-card-header">
                <p>{date}</p>
            </Card.Header>
            <Card.Body className="App-card-body">
                <Card.Title>{title}</Card.Title>
                <Card.Text className="App-card-text">
                    <span>{text}</span>
                    { isReadMore ? <span> {additionalText}</span> : <span>...</span> }                
                </Card.Text>            
            </Card.Body>   
            <Card.Footer>
                <Button className="btn btn-outline-primary" onClick={toggleReadMore}>{ !isReadMore ? 'READ MORE' : 'READ LESS' } </Button>
            </Card.Footer>                     
        </Card>
    );    
};

export default ArticleCard;
