import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import NavbarComponent from "./NavbarComponent";
import Background from '../bg-jumbotron.jpg';

var sectionStyle = {
  width: "100%",
  backgroundImage: `url(${Background})`,
};

const JumbotronComponent = () => {
  return (
    <section>
      <NavbarComponent />
      <Jumbotron fluid className="jumbotron" style={ sectionStyle }>
        <Container className="text-center jumbotron-container">
          <h1>Unlimited movies, TV </h1>
          <h1>shows, and more.</h1>
          <h2>
            Watch anywhere. Cancel anytime.
          </h2>
          <p>
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <Button className="jumbotron-button" color="dark">Find your favourite movie</Button>
        </Container>
      </Jumbotron>
    </section>
  );
};

export default JumbotronComponent;
