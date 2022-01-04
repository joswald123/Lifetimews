import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

import SecuritiesAmerica from './SecuritiesAmerica'
import AdvisorGroup from './AdvisorGroup'
import AssetMark from './AssetMark'

//  Img card
import imageSecurities from '../images/Securities.jpg'
import imageAdvisor from '../images/Advisor.png'
import imageAssetMark from '../images/AssetMark.png'

function BusinessCard() {
    const title = "BUSINESS RELATIONSHIPS";

    const business = [
        { id: 1, img: imageSecurities, content: <SecuritiesAmerica /> },
        { id: 2, img: imageAdvisor, content: <AdvisorGroup /> },
        { id: 3, img: imageAssetMark, content: <AssetMark /> }
    ];

    return (
        <Container fluid>
            <h2 className='text-center mt-3'>{title}</h2>
            <Row>
                {business.map(({ id, img, content }) => (

                    <Col md={6} lg={4}>
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
                                <Card.Text>
                                    {content}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                ))}
            </Row>

        </Container >
    )
}
export default BusinessCard