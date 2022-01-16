import React from 'react'
import { useSearchParams } from "react-router-dom"
import { Col, Container, FormControl, Row } from 'react-bootstrap';
import { getAllServices, getServicesTitle } from "../data/services/services";
import ServiceCard from '../components/whatwedo/ServieCard'

export default function WhatWeDo() {

    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("filter") ?? "";

    const servicesTitle = getServicesTitle();
    const services = getAllServices();

    const handleFilter = (e) =>  {
        setSearchParams({ filter: e.target.value });
    };
    return (
        <div>
            <h2>{servicesTitle}</h2>

            <Container>
                <Row className='mx-auto'>
                    <Col xs={12} md={6}>
                        <FormControl
                        value={filter}
                            onChange={handleFilter}
                            type="search"
                            placeholder="filter"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Col>
                </Row>

            </Container>

            {services
            .filter((service) => {
                if(!filter) return true;

                const title = service.title.toLowerCase();
                return title.includes(filter.toLowerCase());
            })
            .map(({ id, title, img, content }) => (
                <div id={id} key={id}>
                    <ServiceCard
                        key={id}
                        title={title}
                        img={img}
                        content={content}
                    />
                </div>
            ))}

        </div>
    )
}
