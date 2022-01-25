import React from 'react'
import { Link } from 'react-router-dom';
import "./MultipleCard.css"

export default function MultipleCard(info) {
    const { title } = info;
    const { data } = info;

    return (
        <div>
            <h1 className="title_h1 mt-5 mb-3">{title}</h1>
            <div className="servicesHome">
                <main className="serviceGrid">
                    {data.map((dat) => (
                        <article key={dat.id}>
                            <img src={dat.img} alt={dat.title} />
                            <div className="text">
                                <h3 className='mt-4 mb-4'>{dat.title}</h3>                              
                                <Link
                                    className='btn'
                                    to={"/services/" + dat.link}
                                >
                                    Read More 
                                </Link>
                            </div>
                        </article>
                    ))}
                </main>
            </div>
        </div>
    )
}