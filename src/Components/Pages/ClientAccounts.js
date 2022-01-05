import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'

function ClientAccounts() {
    return (
        <div>
            <Container>

                <Row>
                    {/* <Col >
                        <img src={servicesImages[0].img}/>                                       
                    </Col> */}
                    <Col >
                        <CardHeader>
                            <h1>Client Accounts</h1>
                        </CardHeader>

                        <Card.Body>
                            <Card.Text >
                                <p>AssetMark</p>
                                <p>Securities America</p>
                                <p>Voya Financial</p>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ClientAccounts
