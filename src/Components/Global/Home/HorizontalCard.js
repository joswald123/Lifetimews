import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

// Assets
// import './css/Footer.css';

//  Img card
import img from '../images/germaine.jpg'

const title = "Welcome to Lifetime Capital";


function HorizontalCard() {
    return (
        <Container >
            <Card>
                <h2 className='text-center mt-3'>{title}</h2>
                <Row>
                    <Col md="4">
                        <Card.Img className='p-4 round' src={img} />
                    </Col>
                    <Col xs lg="8">
                        <Card.Body>
                            <Card.Text >
                                With over 30-years of experience in the financial services industry, Germaine
                                Cordes founded Lifetime Capital Financial Group to help her clients achieve
                                financial stability and peace of mind. Her client’s peace of mind comes from
                                knowing that their finances are properly coordinated and on the right track.
                                Simply put, we help our clients take full advantage of the opportunities available
                                to them and to make better financial decisions. Lifetime Capital leverages the
                                wealth management solutions available, with the focus on achieving, and then
                                maintaining, your financial independence.

                                We help our clients pursue their goals, by walking them through a step-by-step
                                process that provide clarity and solutions. As a “holistic” financial planner, care is
                                taken to optimize wealth creation, minimize taxes, and achieve tomorrow’s
                                retirement income needs. The goal, to live a better life without worrying about
                                money.

                                We are an independent firm that has formed strategic alliances with some of the
                                largest resources available in the financial services industry. These resources
                                provide some of the most innovative products and services available so that we
                                may customize financial plans and investment solutions to suit our client’s
                                needs.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default HorizontalCard