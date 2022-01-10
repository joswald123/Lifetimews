import React from 'react'
import MainCard from '../Global/MainCard'

import Germaine from '../Global/About/Germaine'
import Jeannette from '../Global/About/Jeannette'
import Juliana from '../Global/About/Juliana'

//  Img card
import imageGermaine from '../Global/images/germaine.jpg'
import imageJeannette from '../Global/images/Jeannette.jpg'

export default function About() {
    
    const ourTeam = [
        { id: 1, title: 'ABOUT GERMAINE CORDES, CHFC®', img: imageGermaine, content: <Germaine /> },
        { id: 2, title: 'ABOUT JEANNETTE GUTHRIE', img: imageJeannette, content: <Jeannette /> },
        { id: 3, title: 'ABOUT JULIANA OSWALD', img: imageGermaine, content: <Juliana /> }
    ];

    return (
        <div>

            {/* Welcome to Lifetime Capital  */}
            {ourTeam.map(({ id, title, img, content }) => (
                <MainCard
                    key={id}
                    title={title}
                    img={img}
                    content={content}
                />
            ))}

        </div>
    )
}