import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import servicesImages from '../../assets/servicesInfo'


function FinancialPlanning() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs lg="12">
                        <img src={servicesImages[0].img}/>                                       
                    </Col>
                </Row>
                <Row>
                    <Col xs lg="12">
                        <CardHeader>
                            <h1>{servicesImages[0].tittle}</h1>
                        </CardHeader>

                        <Card.Body>
                            <Card.Text >
                            <p>{servicesImages[0].description}</p>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FinancialPlanning
