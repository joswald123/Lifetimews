import React from 'react'
import DoubleCard from '../Global/Home/DoubleCard'
import HorizontalCard from '../Global/Home/HorizontalCard'
import MultipleCard from '../Global/Home/MultipleCard'
import Carousel  from './../Global/Carousel'

// Assets
import '../Global/css/Button.css';

function Home() {
    return (
        <div>
            <Carousel/>
            
            <HorizontalCard/>
            <DoubleCard/>
            <MultipleCard/>

        </div>
    )
}

export default Home
