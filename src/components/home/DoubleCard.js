import React from 'react'

// Assets
import './DoubleCard.css';
import imgPhilosophy from "../../images/philosophy.png"
import imgPhilosophy2 from "../../images/philosophy2.png"

export default function DoubleCard() {
    return (
        <div className="philosophy mt-2" id="philosophy">

            {/* <h1 className="heading"> OUR PHILOSPHY </h1> */}

            <div className="box-container">

                <div className="box">
                    <img src={imgPhilosophy} alt="OUR PHILOSPHY" />
                    <h3 className='heading'>OUR PHILOSOPHY</h3>
                    <p>
                        Our goal is to become your trusted financial advisor. Our commitment is to
                        provide you with straight-forward information, helping you successfully pursue
                        your financial goals and to simplify your financial life.
                        Our practice has been built on the belief that long term relationships are more
                        important than short term gains and that we will never sacrifice the former for
                        the later.
                    </p>
                </div>

                <div className="box">
                    <img src={imgPhilosophy2} alt="VALUES BASES" />
                    <h3  className='heading'>VALUES BASES</h3>
                    <p>
                        Throughout our process, we help you make decisions based on what is important
                        to you, your life, and your financial goals. Your personal principles, values and
                        beliefs influence every aspect of your life and are most satisfied when your
                        financial and life goals meet your purpose; money matters only when it helps you
                        live and build the life that matters the most to you.
                    </p>
                </div>
            </div>
        </div>
    )
}