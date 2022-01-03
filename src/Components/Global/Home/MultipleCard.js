import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

// Assets
// import './css/Footer.css';
const imagenprueba = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ7T0RrgnPPNLL4z3OT4mIRvu6y2vgHpyypw&usqp=CAU';

const title = 'What We Do';

const services = [
    { id: 1, title: 'Comprehensive Financial Planning', img: imagenprueba, link: 'urlprueba' },
    { id: 2, title: 'Asset and Investment Management', img: imagenprueba, link: 'urlprueba' },
    { id: 3, title: 'Cash, Debt and Risk Management', img: imagenprueba, link: 'urlprueba' },
    { id: 4, title: 'Retirement Income Planning', img: imagenprueba, link: 'urlprueba' },
    { id: 5, title: 'Estate Planning', img: imagenprueba, link: 'urlprueba' },
    { id: 6, title: 'Business Owners', img: "../images/comprehensive.png", link: 'urlprueba' }
]

function MultipleCard() {
    return (
        <Container className='mt-3 mb-3' fluid>
            <h2 className='text-center mt-3'>{title}</h2>
            <Row xs={1} md={3} className="g-4">
                {services.map(({ id, title, img, link }) => (
                    <Col key={id}>
                        <Card>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title className='text-center'>{title}</Card.Title>
                                <Button href={link} variant="outline-success" size="sm">Read More {id} </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default MultipleCard