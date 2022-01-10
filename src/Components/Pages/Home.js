import React from 'react'
import Carousel from './../Global/Carousel'

import Welcome from '../Global/Home/Welcome'
import MainCard from '../Global/MainCard'

import DoubleCard from '../Global/Home/DoubleCard'
import MultipleCard from '../Global/Home/MultipleCard'

// Assets
import '../Global/css/Button.css';
//  Img card
import imageGermaine from '../Global/images/germaine.jpg'

export default function Home() {
    
    const welcome = [
        { id: 1, title: 'Welcome to Lifetime Capital', img: imageGermaine, content: <Welcome /> }
    ]

    return (
        <div>
            <Carousel />

            {/* Welcome to Lifetime Capital  */}
            {welcome.map(({ id, title, img, content }) => (
                <MainCard
                    key={id}
                    title={title}
                    img={img}
                    content={content}
                />
            ))}

            <DoubleCard />
            
            <MultipleCard />

        </div>
    )
}