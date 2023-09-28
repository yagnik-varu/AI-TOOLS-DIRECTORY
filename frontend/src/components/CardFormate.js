import { Card, Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import "../App.css"

import { Favorite } from '@mui/icons-material';

function CardFormate(props) {

  const style={"fontWeight":"400","fontSize":"20px","background":"#FF4820","border":"2px solid #FF4820","padding":"0 1rem","color":"#fff","cursor":"pointer","outline":"none"}

  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const cardDetails = (name) =>{
    localStorage.setItem("tool_image",props.image)
    localStorage.setItem("tool_name",name)
    localStorage.setItem("tool_link",props.link)
    localStorage.setItem("tool_description",props.description)
  }


  return (
    <Card style={{ width: 'auto',backgroundColor: 'rgba(4, 44, 84, 1)' }} className='mt-3 m-2'  bg=''>
      <Card.Img variant="top" src={props.image} style={{height: "250px"}}  />
      <Card.Body>
        <Card.Title className='text-light'>{props.name}</Card.Title>
        <Card.Text className='text-light' >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush" >
        <ListGroup.Item className='text-light' style={{backgroundColor: 'rgba(4, 44, 84, 1)'}} >Cras justo odio</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {/* <Card.Link to="carddetail">know more</Card.Link> */}
        <Link className="btn click-button text-light" style={style} to="/carddetail" onClick={() => cardDetails(props.name)}>
            know more
          </Link>
          <Button
          variant="outline-danger"
          onClick={handleLikeClick}>
          <Favorite /> add to favourite ({likes})
        </Button>
          
        
      </Card.Body>
    </Card>
  );
}

export default CardFormate;