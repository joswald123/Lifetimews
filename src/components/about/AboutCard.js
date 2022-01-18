import React from 'react'

import "./About.css"

export default function AboutCard({ title, img, content }) {

    return (
        <div className="welcome">
            <div className="post">
                <div className="post__img">
                    <img src={img} alt={title} />
                </div>
                <div className="post__info">
                    <h1 className="heading">{title}</h1>

                    {content}

                </div>
            </div>
        </div>
    )
}