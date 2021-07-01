import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import React, { useState }  from "react";

interface articleCardProps {
    date: string;
    title: string;
    text: string;
    additionalText: string;
}
  
// Props
// actor. an instance of ActorModel
const ArticleCard: React.FunctionComponent<articleCardProps> = ({ date, title, text, additionalText }) => { 
    const [isReadMore, setIsReadMore] = useState(false);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (                          
        <Card className="App-Card">    
            <Card.Header>
                <small className="text-muted">{date}</small>
            </Card.Header>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                <p>{text}</p>
                { isReadMore ? <p>{additionalText}</p> : '' }                
            </Card.Text>
            <Button variant="primary" onClick={toggleReadMore}>READ MORE</Button>
            </Card.Body>                        
        </Card>
    );    
};

export default ArticleCard;
