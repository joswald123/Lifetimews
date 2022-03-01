import React from 'react'
import { Carousel } from 'react-bootstrap';

// img Carouser
import Beach from '../../images/Beach pic.png';
import Peace from '../../images/Peace pic.png';
import Pathway from '../../images/Pathway pic.png';

// Assets
import './Carousel.css';

// Description slider
const descriptionBeachSlider = 'Retirement Redefined-Guiding You Every Step of The Way';
const descriptionPeaceSlider = 'Holistic Financial Planning';
const descriptionPathwaySlider = 'Create Your Path Towards Financial Independence…';

export default function Carousell() {
    return (
        <Carousel >
            <Carousel.Item>
                
                    <img
                        className="d-block w-100"
                        src={Beach}
                        alt="First slide"
                    />
                
                <Carousel.Caption>
                    <h4>{descriptionBeachSlider}</h4>
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
                        src={Pathway}
                        alt="Third slide"
                    />
                

                <Carousel.Caption>
                    <h4>{descriptionPathwaySlider}</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
