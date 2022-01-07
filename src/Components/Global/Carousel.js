import React from 'react'
import { Carousel, Container } from 'react-bootstrap';

// img Carouser
import Retirement from './images/Retirement pic.jpg';
import Peace from './images/Peace pic.jpg';
import Waterbridge from './images/Waterbridge pic.png';

// Assets
import './css/Carousel.css';

// Description slider
const descriptionRetirementSlider = 'Retirement Redefined Guiding You Every Step of The Way';
const descriptionPeaceSlider = 'Helping You Achieve Financial Independence…';
const descriptionWaterbridgeSlider = 'Holistic Financial Planning';

function Footer() {
    return (
        <Carousel >
            <Carousel.Item>
                
                    <img
                        className="d-block w-100"
                        src={Retirement}
                        alt="First slide"
                    />
                
                <Carousel.Caption>
                    <h3>{descriptionRetirementSlider}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                
                    <img
                        className="d-block w-100"
                        src={Peace}
                        alt="Second slide"
                    />
                

                <Carousel.Caption>
                    <h3>{descriptionPeaceSlider}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                
                    <img
                        className="d-block w-100"
                        src={Waterbridge}
                        alt="Third slide"
                    />
                

                <Carousel.Caption>
                    <h3>{descriptionWaterbridgeSlider}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Footer