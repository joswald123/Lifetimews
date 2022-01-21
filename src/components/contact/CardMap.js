import React from 'react'
import "./CardMap.css"

import imgMap from "../../images/location.png"
import Map from "./Map"

export default function CardMap() {

    return (
        <div className="box-map">
            <div className="box">

                <div className="content">
                    <Map />
                </div>

                <div className="image">
                    <img src={imgMap} alt="map" />
                </div>

            </div>
        </div>
    )
}