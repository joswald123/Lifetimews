import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import servicesImages from '../../../assets/servicesInfo';

// Assets   
    

const title = 'What We Do';

const services = [
    { id: 1, title: servicesImages[0].tittle, img: servicesImages[0].img, link: '/financialPlanning' },
    { id: 2, title: servicesImages[1].tittle, img: servicesImages[1].img, link: '/investmentManagement' },
    { id: 3, title: servicesImages[2].tittle, img: servicesImages[2].img, link: '/cashManagement' },
    { id: 4, title: servicesImages[3].tittle, img: servicesImages[3].img, link: '/retirementPlanning' },
    { id: 5, title: servicesImages[4].tittle, img: servicesImages[4].img, link: '/estatePlanning' },
    { id: 6, title: servicesImages[5].tittle, img: servicesImages[5].img, link: '/businessOwner' }
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