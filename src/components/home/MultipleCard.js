import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MultipleCard(info) {
    const { title } = info;
    const { data } = info;

    return (
        <Container className='mt-3 mb-3' >

            <h1 className='heading'>{title}</h1>

            <Row xs={1} md={3} className="g-4">

                {data.map((dat) => (
                    <Col key={dat.id}>
                        <Card>
                            <Card.Img variant="top" src={dat.img} />
                            <Card.Body>
                                <Card.Title className='text-center'>{dat.title}</Card.Title>
                                <Button
                                    as={Link} to={"/services/" + dat.link}>
                                    Read More +
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>
        </Container>
    )
}