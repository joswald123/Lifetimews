import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';

import Information from './information/Information';


export default function Layout() {
    return (
        <div>
            <Header />

            <main>
                <Outlet />

                <Information/>

            </main>

            <Footer />
        </div>
    )
}