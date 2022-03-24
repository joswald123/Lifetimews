import React from 'react'
import { Link } from 'react-router-dom';

import img404 from '../images/404.png';
import "./404.css";

export default function e404() {
    return (
        <div className='box-404'>
            <div className='content-404'>
                <div className='image-404'>
                    <img src={img404} alt="" />
                </div>
                <div className='text-404'>
                    <h1>No found</h1>
                    <strong> “Looks like the page you are looking for is not available" </strong>
                </div>
                <div className='btn-404'>
                    <Link className='btn' to={"/"} >
                        Back Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

