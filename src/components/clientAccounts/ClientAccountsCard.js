import React from 'react'

//  Img card
import imageVoya from '../../images/voya.png'
import imageSecurities from '../../images/SecuritiesClient.png'
import imageAssetMark from '../../images/AssetMark.png'

import "./client.css"

export default function ClientAccountsCard() {

    return (
        <div className='container-clientAccount'>
            <div className='login mt-5'>
                <h1 className='title_h1'>Client Login</h1>
                <p> Please click on the icons below for the service you wish to access. </p>
            </div>
            <div className='container-cards mb-5'>
                <div className='cards'>
                    <a href={"https://www.ewealthmanager.com/eWMLogin/account/login/"}>
                        <div className='cbox'>
                            <div className='cover'>
                                <img src={imageAssetMark} alt="Logo AssetMark" />
                            </div>
                        </div>
                    </a>
                </div>

                <div className='cards'>
                    <a href={"https://www.netxinvestor.com/nxi/login"}>
                        <div className='cbox'>
                            <div className='cover'>
                                <img src={imageSecurities} alt="Logo Securities America" />
                            </div>
                        </div>
                    </a>
                </div>

                <div className='cards'>
                    <a href={"https://my.voya.com/voyassoui/index.html?domain=voyaretirement.voya.com#/login-pweb"}>
                        <div className='cbox'>
                            <div className='cover'>
                                <img src={imageVoya} alt="Logo Voya Financial" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}