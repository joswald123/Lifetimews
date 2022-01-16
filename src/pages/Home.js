import React from 'react'

import { getAllWelcome } from "../data/home/welcome";
import { getAllServices, getServicesTitle } from "../data/services/services";

import Carousel from '../components/home/Carousel'
import AboutCard from '../components/about/AboutCard'
import DoubleCard from '../components/home/DoubleCard'
import MultipleCard from '../components/home/MultipleCard'

// CSS
import '../components/Button.css';

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