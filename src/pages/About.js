import React from 'react'
import { getAllAboutUs, getAboutUsTitle } from "../data/about/about";
import AboutCard from '../components/about/AboutCard'

export default function About() {

    const aboutTitle = getAboutUsTitle();
    const about = getAllAboutUs();
    
    return (
        <div id='about'>

            {/* <h1 className='heading'>{ aboutTitle }</h1> */}

            {about.map(({ id, title, img, content }) => (
                <AboutCard
                    key={id}
                    title={title}
                    img={img}
                    content={content}
                />
            ))}

        </div>
    )
}