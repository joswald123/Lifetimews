import React from 'react'
import { Carousel } from 'react-bootstrap';

// img Carouser
import Retirement from '../../images/Retirement pic.jpg';
import Peace from '../../images/Peace pic.jpg';
import Waterbridge from '../../images/Waterbridge pic.png';

// Assets
import './Carousel.css';

// Description slider
const descriptionRetirementSlider = 'Retirement Redefined Guiding You Every Step of The Way';
const descriptionPeaceSlider = 'Helping You Achieve Financial Independence…';
const descriptionWaterbridgeSlider = 'Holistic Financial Planning';

export default function Carousell() {
    return (
        <Carousel >
            <Carousel.Item>
                
                    <img
                        className="d-block w-100"
                        src={Retirement}
                        alt="First slide"
                    />
                
                <Carousel.Caption>
                    <h4>{descriptionRetirementSlider}</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                
                    <img
                        className="d-block w-100"
                        src={Peace}
                        alt="Second slide"
                    />
                

                <Carousel.Caption>
                    <h4>{descriptionPeaceSlider}</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                
                    <img
                        className="d-block w-100"
                        src={Waterbridge}
                        alt="Third slide"
                    />
                

                <Carousel.Caption>
                    <h4>{descriptionWaterbridgeSlider}</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
