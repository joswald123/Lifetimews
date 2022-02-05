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
                        <a href="tel:925-447-0904" >
                            <i className="fas fa-phone"></i>
                            925-447-0904
                        </a>
                        <a href="mailto:germaine.cordes@lifetimecapital.com"
                        > <i className="fas fa-at"> </i>
                            germaine.cordes@lifetimecapital.com
                        </a>
                        <a href="https://maps.google.com/maps?ll=37.695117,-121.900404&z=13&t=m&hl=en&gl=US&mapclient=embed&q=4695%20Chabot%20Dr%20Suite%20200%20Pleasanton%2C%20CA%2094588%20USA"
                            target="_blank">
                            <i className="fas fa-map-marker-alt"> </i>
                            4695 Chabot Drive, Suite 200 Pleasanton, CA94588
                        </a>
                        {/* <a href="www.google.com" > <i className="fas fa-linkedin-in"></i> LifeTime Capital </a> */}
                    </div>

                </div>
            </div>
        </div>
    )
}