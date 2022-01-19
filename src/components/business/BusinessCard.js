import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function BusinessCard({ id, img, content }) {

    return (

        <Container>
            <Row>
                <Col key={id} md={6} lg={4}>
                    <Card
                        key={id}
                        className="mt-2"
                    >
                        <Card.Img
                            variant="top"
                            src={img}
                            width="200"
                            height="180"
                        />
                        <Card.Body>
                            {content}
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>


    )
}