import React from 'react'

import { getAllWelcome } from "../Global/data/welcome";
import { getAllServices, getServicesTitle } from "../Global/data/services";

import Carousel from './../Global/Carousel'
import AboutCard from '../Global/AboutCard'
import DoubleCard from '../Global/Home/DoubleCard'
import MultipleCard from '../Global/Home/MultipleCard'

// CSS
import '../Global/css/Button.css';

export default function Home() {
    // about Welcome
    const welcome = getAllWelcome();

    // services multiplecard
    const servicesTitle = getServicesTitle();
    const services = getAllServices();  

    return (
        <div>
            <Carousel />

            {/* Welcome to Lifetime Capital  */}
            {welcome.map(({ id, title, img, content }) => (
                <AboutCard
                    key={ id }
                    title={ title }
                    img={ img }
                    content={ content }
                />
            ))}

            <DoubleCard />

            {/* services multiplecard */}
            <MultipleCard
                title= { servicesTitle }
                data= { services }
            />

        </div>
    )
}