import React from 'react'
import "./CardMap.css"

import imgMap from "../../images/map.PNG"
import imgLocation from "../../images/location.png"
import Map from "./Map"

export default function CardMap() {

    return (
        <div className = "box-map" >
            <div className="box">
                <div className="content">
                <a href="https://maps.google.com/maps?ll=37.695117,-121.900404&z=13&t=m&hl=en&gl=US&mapclient=embed&q=4695%20Chabot%20Dr%20Suite%20200%20Pleasanton%2C%20CA%2094588%20USA"
                            target="_blank">
                    <img src={imgMap} alt="map 4695 Chabot Drive, Suite 200 Pleasanton, CA94588" />
                </a>
                </div>
                <div className="image">
                    <img src={imgLocation} alt="map" />
                </div>
            </div>
        </div>

        //  <div className="box-map">
        //         <div className="box">
        //             <div className="content">
        //                 <Map />
        //             </div>
        //             <div className="image">
        //                 <img src={imgLocation} alt="map" />
        //             </div>
        //         </div>
        //     </div> 
    
    )
}