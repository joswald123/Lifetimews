import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

export default function ServiceCard({ title, img, content }) {
    return (
        <Container>
            <Row>
                <Card className='mt-2'>
                <Col lg="12">
                    <img src={img} alt={title} className='w-100' />
                </Col>
                <Col lg="12">
                    <h2>{title}</h2>

                    <Card.Body>
                        {content}
                    </Card.Body>
                </Col>
                </Card>
            </Row>
        </Container>
    )
}