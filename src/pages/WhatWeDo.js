import React from 'react'
import { useSearchParams } from "react-router-dom"
import { FormControl } from 'react-bootstrap';
import { getAllServices, getServicesTitle } from "../data/services/services";
import ServiceCard from '../components/whatwedo/ServieCard'

export default function WhatWeDo() {

    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("filter") ?? "";

    const servicesTitle = getServicesTitle();
    const services = getAllServices();

    const handleFilter = (e) => {
        setSearchParams({ filter: e.target.value });
    };
    return (
        <div>
            <h1 className='title_h1 mt-4'>{servicesTitle}</h1>

            <div className='box-search'>
                <div className='search'>
                    <FormControl
                        value={filter}
                        onChange={handleFilter}
                        type="search"
                        placeholder="search"
                        aria-label="Search"
                    />
                </div>
            </div>

            {services
                .filter((service) => {
                    if (!filter) return true;

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
