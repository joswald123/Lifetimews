import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BusinessCard from '../Global/BusinessCard'

import AdvisorGroup from '../Global/Business/AdvisorGroup'
import SecuritiesAmerica from '../Global/Business/SecuritiesAmerica'
import AssetMark from '../Global/Business/AssetMark'

//  Img card
import imageAdvisor from '../Global/images/Advisor.png'
import imageSecurities from '../Global/images/Securities.jpg'
import imageAssetMark from '../Global/images/AssetMark.png'


export default function BusinessRelationship() {
    const title = "BUSINESS RELATIONSHIPS";

    const business = [
        { id: 1, img: imageAdvisor, content: <AdvisorGroup /> },
        { id: 2, img: imageSecurities, content: <SecuritiesAmerica /> },
        { id: 3, img: imageAssetMark, content: <AssetMark /> }
    ];

    return (
        <Container>
            <h2 className='text-center mt-3'>{title}</h2>
            <Row>
                {business.map(({ id, img, content }) => (
                    <BusinessCard
                        key={id}
                        img={img}
                        content={content}
                    />
                ))}
            </Row>
        </Container>
    )
}