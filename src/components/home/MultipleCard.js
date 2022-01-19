import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MultipleCard(info) {
    const { title } = info;
    const { data } = info;

    return (
        <Container className='mt-3 mb-3' >

            <h1 className='heading mt-5 mb-5'>{title}</h1>

            <Row xs={1} md={3} className="g-4">

                {data.map((dat) => (
                    <Col key={dat.id}>
                        <Card className='mb-5'>
                            <Card.Img variant="top" src={dat.img} />
                            <Card.Body >
                                <Card.Title className='text-center mb-4 mt-4 font-weight-bold'>
                                    {dat.title}
                                </Card.Title>
                                <div className="d-grid gap-2">
                                <Button
                                    size="lg"
                                    as={Link} to={"/services/" + dat.link}>
                                    Read More +
                                </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>
        </Container>
    )
}