import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Eventone from "./Eventone";

function Events() {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <h1>Events</h1>
        </Col>
      </Row>
      <hr className="my-4" />

      <Row>
        <h2>Science Outreach Program :</h2>
        <Eventone />
      </Row>

      <style>
        {`
          h1 {
            font-size: 50px;
            font-weight: bold;
          }

          h2 {
            color: var(--secondary-color);
          }

        `}
      </style>
    </Container>
  );
}

export default Events;
