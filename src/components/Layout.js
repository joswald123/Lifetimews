import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';

import brokercheck from '../images/brokercheck_finra.png'


export default function Layout() {
    return (
        <div>
            <Header />

            <main>
                <Outlet />

                <div className='broker'>
                    <a href="https://brokercheck.finra.org/" target='_blank'>
                        <img src={brokercheck} alt="broker check logo" />
                    </a>
                </div>

            </main>

            <Footer />
        </div>
    )
}