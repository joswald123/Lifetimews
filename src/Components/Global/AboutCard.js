import React from 'react'
import { Card, Container } from 'react-bootstrap'

export default function AboutCard({ title, img, content }) {

    return (
        <Container className='mt-2 mb-2'>

            <Card className='mt-3'>

                <h2 className='text-center mt-3'>{title}</h2>

                <div className="clearfix">
                    <img src={img} className="col-sm-4 col-md-2 float-md-start m-3 about" alt={title} />

                    <Card.Body>
                        {content}
                    </Card.Body>

                </div>
            </Card>

        </Container>
    )
}