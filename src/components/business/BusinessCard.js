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

export default function BusinessCard() {

    return (
        <div>
            <div>
                <h1 className='title_h1 mt-3 pt-5'>Business Relationships</h1>
            </div>
            <div className='container-cards'>
                <div className='cbox'>
                    <div className='cover'>
                        <img src={imageAdvisor} width={250} height={150} alt="" />
                        <div className='img_back_business'></div>
                    </div>
                    <div className='box-body'>
                        <AdvisorGroup />
                    </div>
                </div>
                <div className='cbox'>
                    <div className='cover'>
                        <img src={imageSecurities} width={250} height={150} alt="" />
                        <div className='img_back_business'></div>
                    </div>
                    <div className='box-body'>
                        <SecuritiesAmerica />
                    </div>
                </div>
                <div className='cbox'>
                    <div className='cover'>
                        <img src={imageAssetMark} width={250} height={150} alt="" />
                        <div className='img_back_business'></div>
                    </div>
                    <div className='box-body'>
                        <AssetMark />
                    </div>
                </div>
            </div>
        </div>
    )
}