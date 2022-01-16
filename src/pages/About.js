import React from 'react'
import { getAllAboutUs, getAboutUsTitle } from "../data/about/about";
import AboutCard from '../components/about/AboutCard'

export default function About() {

    const aboutTitle = getAboutUsTitle();
    const about = getAllAboutUs();
    
    return (
        <div id='about'>

            <h2 className='mx-auto'>{ aboutTitle }</h2>

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