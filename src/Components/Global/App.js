import './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import BusinessRelationship from '../Pages/BusinessRelationship';
import ClientAccounts from '../Pages/ClientAccounts';

// ----Services pages -----------------------------------
import WhatWeDo from '../Pages/WhatWeDo';


import ErrorPage from '../Pages/ErrorPage';
import Layout from './Layout';
import Service from '../Pages/Service';


function App() {
  return (
    <Router>

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

        {/* <Route path="/services/financialPlanning" element={<WhatWeDo />} />
        <Route path="/services/retirementPlanning" element={<WhatWeDo />} />
        <Route path="/services/cashManagement" element={<WhatWeDo />} />
        <Route path="/services/investmentManagement" element={<WhatWeDo />} />
        <Route path="/services/estatePlanning" element={<WhatWeDo />} />
        <Route path="/services/businessOwner" element={<WhatWeDo />} /> */}


      </Routes>


    </Router>
  );
}

export default App;