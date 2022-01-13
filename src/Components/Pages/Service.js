import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { getLinkService } from "../Global/data/services";
import ServiceCard from '../Global/ServieCard'

export default function Service() {

    const params = useParams();

    const { id, title, img, content } = getLinkService(params.serviceId);

    return (

        <div id={id} key={id}>
            <ServiceCard
                key={id}
                title={title}
                img={img}
                content={content}
            />
            <Button
                as={Link} to={"/services"}
                variant="outline-success"
                size="sm">
                Read More +
            </Button>
        </div>
    )
}