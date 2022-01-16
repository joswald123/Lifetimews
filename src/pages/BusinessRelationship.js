import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BusinessCard from '../components/business/BusinessCard'

import AdvisorGroup from '../data/Business/AdvisorGroup'
import SecuritiesAmerica from '../data/Business/SecuritiesAmerica'
import AssetMark from '../data/Business/AssetMark'

//  Img card
import imageAdvisor from '../images/Advisor.png'
import imageSecurities from '../images/Securities.jpg'
import imageAssetMark from '../images/AssetMark.png'


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