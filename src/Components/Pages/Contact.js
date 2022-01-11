import React from "react";
import { Card, Col, Container, FormGroup, Row } from "react-bootstrap";

// Components
import Form from '../Global/Contact/Form'
import Map from '../Global/Contact/Map'

// Images
import backgroundImg from '../Global/images/officeAddressImg.PNG'

//styles
import "../Global/css/Contact.css"


function Contact() {
  // History function
  return (
    <div className="contact">
      <Container>
        <Row>
          <Col>
              <h1>Contact</h1>
              <span className="line"></span>
          </Col>

        </Row>
        <Row md={{ span: 6, offset: 3 }}>
          <Col>
              <img src={backgroundImg} alt='backgroundImg' className='w-100 h-60'/>
          </Col>
        </Row>
        
        <Row className="mb-5 mt-2">
          <Col xs={6}>
            <Map />
          </Col>
          <Col xs={6} >

              <p>4695 Chabot Drive, Suite 200 Pleasanton, CA 94588</p>
              <p>Phone: 925-447-0904</p>
              <p>germaine.cordes@lifetimecapital.com</p>

          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="mb-5">
              <Form />
            </Card> 
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;