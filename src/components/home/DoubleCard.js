import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

// Assets
import './home.css';

function DoubleCard() {
    return (
        <Container className='mt-5' >
            <Row>
                <Col md="6">
                    <Card className="mb-2">
                        <Card.Body className="bgPurple">
                            <Card.Title 
                                className='text-center icon' aria-hidden="true"> 
                                <i className="PhilosophyIcon fas fa-hiking"></i> OUR PHILOSPHY     
                            </Card.Title>
                            <Card.Text>
                                Our goal is to become your trusted financial advisor. Our commitment is to
                                provide you with straight-forward information, helping you successfully pursue
                                your financial goals and to simplify your financial life.
                                Our practice has been built on the belief that long term relationships are more
                                important than short term gains and that we will never sacrifice the former for
                                the later.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs lg="6">
                    <Card className="mb-2 bgPurple">
                        <Card.Body className="bgPurple">
                            <Card.Title 
                                className='text-center icon' aria-hidden="true"> 
                                <i className="fas fa-hand-holding-medical"></i>OUR PHILOSPHY
                            </Card.Title>
                            <Card.Text>
                                Throughout our process, we help you make decisions based on what is important
                                to you, your life, and your financial goals. Your personal principles, values and
                                beliefs influence every aspect of your life and are most satisfied when your
                                financial and life goals meet your purpose; money matters only when it helps you
                                live and build the life that matters the most to you.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default DoubleCard