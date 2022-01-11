import React, { useState } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'

import markerPoint from '../images/markerimg.png'

//styles
import '../css/Contact.css'

function Map() {

    const [viewport, setViewport] = useState({
        latitude:37.69529012677492, 
        longitude:-121.90038501579956,
        zoom: 13,
        with: "100vw",
        height: "100vh"
        // pitch: 50
    });

    return (
        <ReactMapGL className='map'
        {... viewport}
        // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapboxApiAccessToken="pk.eyJ1IjoianVsaTkxNjEiLCJhIjoiY2t3cWtncDk3MG5oYTJ3anZncXhiMGo4eiJ9.SHq1amkZ4KBXeo2sid-Yfg"
        mapStyle={'mapbox://styles/mapbox/streets-v11'}
        width="100%"
        height="100%"
        onViewportChange={newView => {
            setViewport(newView)
        }}
        >
        <Marker 
            latitude={37.69529012677492} 
            longitude={-121.90038501579956} 
            offsetTop={-viewport.zoom * 5/2}
            >
            <div className='addressText'>4695 Chabot Dr Suite 200</div>
            <div className='addressText'>Pleasanton, CA 94588</div>
            <img
                src={markerPoint}
                width={viewport.zoom * 5}
                height={viewport.zoom * 5}
            />
        </Marker>
        </ReactMapGL>
    )
}

export default Map;
