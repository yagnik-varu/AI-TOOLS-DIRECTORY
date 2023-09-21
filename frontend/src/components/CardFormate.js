import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from "react-router-dom";

function CardFormate(props) {
  return (
    <Card style={{ width: 'auto' }} className='bg-dark mt-4 m-2'>
      <Card.Img variant="top" src={props.image} style={{height: "200px"}}  />
      <Card.Body>
        <Card.Title className='text-light'>{props.name}</Card.Title>
        <Card.Text className='text-light' >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush bg-dark">
        <ListGroup.Item className='bg-dark text-light'>Cras justo odio</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {/* <Card.Link to="carddetail">know more</Card.Link> */}
        <Link className="btn btn-primary text-light" to="/carddetail" >
            know more
          </Link>
          
        
      </Card.Body>
    </Card>
  );
}

export default CardFormate;