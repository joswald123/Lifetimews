import React from 'react'

import "./services.css"

export default function ServiceCard({ title, img, content }) {
    return (
        <div className='containerServices'>
                <div className='card-container'>
                    <div className='header'>
                        <a href='#'>
                            <img src={img} alt={title}/>
                            
                        </a>
                    </div>
                    <div className='description'>
                        <h2>{title}</h2>
                        {content}
                        <div className='contact'>
                            <a href='#'><i className="fas fa-comment-alt">contactenos</i></a>
                            <a href='#'><i className="fas fa-comment-alt">contactenos</i></a>
                            <a href='#'><i className="fas fa-comment-alt">contactenos</i></a>
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}