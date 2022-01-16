import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

import imgCover from '../images/tree2.png'
import imgAssetmark from '../images/assetmark2.jpeg'
import imgSecurities from '../images/securities2.jpeg'
import imgVoya from '../images/voya.jpeg'

export default function ClientAccounts() {

    const clientLogin = [
        { id: 1, title: 'ASSETMARK', img: imgAssetmark, link: "https://www.ewealthmanager.com/eWMLogin/account/login/" },
        { id: 2, title: 'SECURITIES AMERICA', img: imgSecurities, link: "https://www.netxinvestor.com/nxi/login" },
        { id: 3, title: 'VOYA FINANCIAL GROUP', img: imgVoya, link: "https://my.voya.com/voyassoui/index.html?domain=voyaretirement.voya.com#/login-pweb" }
    ];
    return (
        <div>

            <img src={imgCover} alt='tree' className='w-100' />

            <Container className='mt-3 mb-3'>
                <Row>
                    <h5>Please click on the icons below for the service you wish to access.</h5>
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
        </div>
    )

}

