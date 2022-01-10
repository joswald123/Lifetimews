import React from "react";
import Form from '../Global/Contact/Form'

function Contact() {
  // History function
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <CardHeader>
              <h1>Contact</h1>
            </CardHeader>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Google Maps Location</h1>
          </Col>
          <Col>
            <Card.Body>
              <p>4695 Chabot Drive, Suite 200 Pleasanton, CA 94588</p>
              <p>Phone: 925-447-0904</p>
              <p>germaine.cordes@lifetimecapital.com</p>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
