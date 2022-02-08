import React from 'react'

// Data Content
import AdvisorGroup from '../../data/Business/AdvisorGroup'
import SecuritiesAmerica from '../../data/Business/SecuritiesAmerica'
import AssetMark from '../../data/Business/AssetMark'

//  Img card
import imageAdvisor from '../../images/Advisor.png'
import imageSecurities from '../../images/Securities.png'
import imageAssetMark from '../../images/AssetMark.png'

import "./business.css"

export default function BusinessCard({ id, img, content, title }) {

    return (

        <div className='container__cards'>
            <div className='box'>
                <div className='cover'>
                    <img src={imageAdvisor} width={250} height={150} />
                    <div className='img_back_business'></div>
                </div>
                {/* <h2 className='card-title'>Advisor Group</h2> */}
                <div className='box-body'><AdvisorGroup /></div>
            </div>
            <div className='box'>
                <div className='cover'>
                    <img src={imageSecurities} width={250} height={150} />
                    <div className='img_back_business'></div>
                </div>
                {/* <h2 className='card-title'>Securities America</h2> */}
                <div className='box-body'><SecuritiesAmerica /></div>
            </div>
            <div className='box'>
                <div className='cover'>
                    <img src={imageAssetMark} width={250} height={150} />
                    <div className='img_back_business'></div>
                </div>
                {/* <h2 className='card-title'>AssetMark</h2> */}
                <div className='box-body'><AssetMark /></div>
            </div>
        </div>


    )
}