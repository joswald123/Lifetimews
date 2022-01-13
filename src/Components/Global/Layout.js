import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

// Assets
import './css/main.css';

export default function Layout() {
    return (
        <div>
            <Header />
            
            <section>
                <Outlet/>
            </section>

            <Footer />
        </div>
    )
}