import React from 'react'
import { getAllServices, getServicesTitle } from "../Global/data/services"; 
import ServiceCard from '../Global/ServieCard'

export default function WhatWeDo() {

    const servicesTitle = getServicesTitle();
    const services = getAllServices();

    return (
        <div>
            <h2>{ servicesTitle }</h2>    
            {/* What we do  */}
            {services.map(({ id, title, img, content }) => (
                <div id={id} key={id}>
                    <ServiceCard
                        key={id}
                        title={title}
                        img={img}
                        content={content}
                    />
                </div>
            ))}

        </div>
    )
}
