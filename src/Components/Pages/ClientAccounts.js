import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import AssetmarkImg from '../Global/images/assetmark2.jpeg'
import securitiesImg from '../Global/images/securities2.jpeg'
import voyaImg from '../Global/images/voya.jpeg'

function ClientAccounts() {

    const clientLogin = [
        { id: 1, title: 'ASSETMARK', img: AssetmarkImg, link: "https://www.ewealthmanager.com/eWMLogin/account/login/" },
        { id: 2, title: 'SECURITIES AMERICA', img: securitiesImg, link: "https://www.netxinvestor.com/nxi/login" },
        { id: 3, title: 'VOYA FINANCIAL GROUP', img: voyaImg, link: "https://my.voya.com/voyassoui/index.html?domain=voyaretirement.voya.com#/login-pweb" }
    ];
    return (
        <Container className='mt-5 mb-5'>
            <Row>
                
            </Row>
            <Row>
                
                {clientLogin.map(({ id, title, img, link }) => (

                <Col key={id} md={6} lg={4}>
                        <Card
                            key={id}
                            className="mt-2"
                        >   
                            <a href={link}>
                            <Card.Img
                                variant="top"
                                src={img}
                                width="200"
                                height="180"
                            />
                            </a>
                            <Card.Body>
                                <Card.Text>
                                    {title}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
            ))}
            </Row>
        </Container>
    )

}

export default ClientAccounts
