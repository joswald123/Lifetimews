import React from 'react'

import "./about.css"

export default function AboutCard({ title, img, content }) {

    return (
        <div className="welcome">
            <div className="post">
                <div className="post-img">
                    <img src={img} alt={title} />
                </div>
                <div className="post-info">
                    <h2 className="title_h2 mb-4 mt-3">{title}</h2>

                    {content}

                </div>
            </div>
        </div>
    )
}