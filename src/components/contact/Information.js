import React from 'react'
import "./Information.css"

import imgInformation from "../../images/contact.png"

export default function Information() {

    return (
        <div>
            <div className="box-information">
                <div className="box">

                    <div className="image">
                        <img src={imgInformation} alt="contact" />
                    </div>

                    <div className="content">
                        <a href="www.google.com" > <i className="fas fa-phone"></i> 925-447-0904</a>
                        <a href="www.google.com" > <i className="fas fa-at"></i> germaine.cordes@lifetimecapital.com</a>
                        <a href="www.google.com" > <i className="fas fa-map-marker-alt"> </i> 4695 Chabot Drive, Suite 200 Pleasanton, CA
                            94588</a>
                        {/* <a href="www.google.com" > <i className="fas fa-linkedin-in"></i> LifeTime Capital </a> */}
                    </div>

                </div>
            </div>
        </div>
    )
}