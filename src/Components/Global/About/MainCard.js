import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Germaine from './Germaine'
import Jeannette from './Jeannette'
import Juliana from './Juliana'

//  Img card
import imageGermaine from '../images/germaine.jpg'
import imageJeannette from '../images/Jeannette.jpg'


function MainCard() {

    const ourTeam = [
        { id: 1, title: 'ABOUT GERMAINE CORDES, CHFC®', img: imageGermaine, content: <Germaine /> },
        { id: 2, title: 'ABOUT JEANNETTE GUTHRIE', img: imageJeannette, content: <Jeannette /> },
        { id: 3, title: 'ABOUT JULIANA OSWALD', img: imageGermaine, content: <Juliana /> }
    ];

    return (
        <Container className='mt-2 mb-2'>

            {ourTeam.map(({ id, title, img, content }) => (

                <Card
                    key={id}
                    className='mt-3'
                >
                    <h2 className='text-center mt-3'>{title}</h2>
                    <div className="clearfix">
                        <img src={img} className="col-sm-4 col-md-2 float-md-start m-3 about" alt={title} />
                        
                        <Card.Body>
                            {content}
                        </Card.Body>
                        
                    </div>
                </Card>
            ))}
        </Container>
    )
}
export default MainCard
