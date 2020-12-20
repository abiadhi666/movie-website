import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
} from "reactstrap";

const CardComponent = (props) => {
  
  const renderCard = (card, index) => {
    return (
      <Card key={index} className="card">
        <CardImg
          top
          width="100%"
          src={card.image}
          alt="Card image cap"
          className="box"
        />
        <CardBody>
          <CardTitle tag="h5">
            {card.title}
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {card.showTime}
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    )
  }


  return (
    <Container>
      <div className="grid">
        {props.movies.map(renderCard)}
      </div>
    </Container>
  );
};

export default CardComponent;
