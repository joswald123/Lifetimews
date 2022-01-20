import './App';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import BusinessRelationship from '../pages/BusinessRelationship';
import ClientAccounts from '../pages/ClientAccounts';
import WhatWeDo from '../pages/WhatWeDo';
import ErrorPage from '../pages/ErrorPage';
import Service from '../pages/Service';
import Layout from '../components/Layout';
import { useLayoutEffect } from 'react';


export default function App() {
  // scroll to top menu
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }

  return (
    <Router>
      <Wrapper>

        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="businessRelationship" element={<BusinessRelationship />} />
            <Route path="clientAccounts" element={<ClientAccounts />} />

            <Route path="services" element={<WhatWeDo />} />
            <Route path="services/:serviceId" element={<Service />} />

            <Route path="*" element={<ErrorPage />} />
            {/* <Route path="*" element={ <Navigate replace to="/" /> }/> */}
          </Route>
        </Routes>

      </Wrapper>
    </Router>
  );
}
