import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import servicesImages from '../../assets/servicesInfo'

function BusinessOwners() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs lg="12">
                        <img src={servicesImages[5].img}/>                                       
                    </Col>
                </Row>
                <Row>
                    <Col xs lg="12">
                        <CardHeader>
                            <h1>{servicesImages[5].tittle}</h1>
                        </CardHeader>

                        <Card.Body>
                            <Card.Text >
                            Financial planning for all aspects of life…

                            Goal Projections
                            Cash, Debt and Risk Management
                            Asset Management and Investments
                            Planning for Retirement
                            Retirement Income Planning
                            Tax Planning
                            Education Planning
                            Estate Planning
                            Business Planning
                            Executive Benefits
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>       
        </div>
    )
}

export default BusinessOwners
