import React from 'react'

//  Img card
import imageVoya from '../../images/voya.png'
import imageSecurities from '../../images/Securities.png'
import imageAssetMark from '../../images/AssetMark.png'

import "./client.css"

export default function ClientAccountsCard() {



    return (

        <div>
            <div>
            <h1 className='title_h1 mt-3 pt-5'>Clients Accounts</h1>
            </div>
            <div className='container__cards'>
            <a href={"https://www.ewealthmanager.com/eWMLogin/account/login/"}>
                <div className='cbox'>
                    <div className='cover'>
                        <img src={imageAssetMark} width={250} height={150} />
                        <div className='img_back'></div>
                    </div>
                    <h2 className='box-title'>AssetMark</h2>

                </div>
            </a>

            <a href={"https://www.netxinvestor.com/nxi/login"}>
                <div className='cbox'>
                    <div className='cover'>
                        <img src={imageSecurities} width={250} height={150} />
                        <div className='img_back'></div>
                    </div>
                    <h2 className='box-title'>Securities America</h2>

                </div>
            </a>


            <a href={"https://my.voya.com/voyassoui/index.html?domain=voyaretirement.voya.com#/login-pweb"}>
                <div className='cbox'>
                    <div className='cover'>
                        <img src={imageVoya} width={250} height={150} />
                        <div className='img_back'></div>
                    </div>
                    <h2 className='box-title'>Voya Financial</h2>

                </div>
            </a>

        </div>
        </div>
        


    )
}