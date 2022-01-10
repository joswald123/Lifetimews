import { Button, Card, Col, Container, Row } from 'react-bootstrap';

// Asset images
import imgFinancial from '../images/comprehensive_financial_planning.png'
import imgRetirement from '../images/retirement_planning.png'
import imgCash from '../images/cash_management.png'
import imgInvestment from '../images/investment_management.png'
import imgEstate from '../images/estate_planning.png'
import imgBusiness from '../images/business_owners.png'

// Assets   
const title = 'What We Do';

const services = [
    { id: 1, title: 'COMPREHENSIVE FINANCIAL PLANNING', img: imgFinancial, link: '/financialPlanning' },
    { id: 2, title: 'PLANNING FOR RETIREMENT?', img: imgRetirement, link: '/investmentManagement' },
    { id: 3, title: 'CASH, DEBT AND RISK MANAGEMENT', img: imgCash, link: '/cashManagement' }, 
    { id: 4, title: 'ASSET AND INVESTMENTS MANAGEMENT', img: imgInvestment, link: '/retirementPlanning' },
    { id: 5, title: 'ESTATE PLANNING', img: imgEstate, link: '/estatePlanning' }, 
    { id: 6, title: 'BUSINESS OWNERS', img: imgBusiness, link: '/businessOwner' }, 
];

function MultipleCard() {
    return (
        <Container className='mt-3 mb-3' >
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