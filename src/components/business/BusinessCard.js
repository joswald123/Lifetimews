import React from "react";

// Data Content
import AdvisorGroup from "../../data/Business/AdvisorGroup";
import SecuritiesAmerica from "../../data/Business/SecuritiesAmerica";
import AssetMark from "../../data/Business/AssetMark";

//  Img card
import imageAdvisor from "../../images/Advisor.png";
import imageSecurities from "../../images/Securities.png";
import imageAssetMark from "../../images/AssetMark.png";

import "./business.css";

export default function BusinessCard() {
    return (
        <div className="container-business">
            <div>
                <h1 className="title_h1 mt-5">Business Relationships</h1>
            </div>

            <div className="containerCard">
                <div className="theCard">
                    <div className="theFront">
                        <img
                            src={imageAdvisor}                   
                            alt="Logo AdvisorGroup"
                        />
                    
                    </div>
                    <div className="theBack">
                        <AdvisorGroup />
                    </div>
                </div>

                <div className="theCard">
                    <div className="theFront">
                        <img
                            src={imageSecurities}                            
                            alt="Logo SecuritiesAmerica"
                        />
                    
                    </div>
                    <div className="theBack">
                        <SecuritiesAmerica />
                    </div>
                </div>

                <div className="theCard">
                    <div className="theFront">
                        <img
                            src={imageAssetMark}                            
                            alt="Logo AssetMark"
                        />                  
                    </div>
                    <div className="theBack">
                        <AssetMark />
                    </div>
                </div>
            </div>
        </div>
       
    );
}
