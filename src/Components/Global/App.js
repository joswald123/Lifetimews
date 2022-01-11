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
import Footer from './Footer';
import Header from './Header';


function App() {
  return (
    <Router>

      <Header/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/businessRelationship" element={<BusinessRelationship />} />
        <Route path="/clientAccounts" element={<ClientAccounts />} />

        <Route path="/whatwedo/financialPlanning" element={ <WhatWeDo /> } />
        <Route path="/whatwedo/retirementPlanning" element={ <WhatWeDo /> } />
        <Route path="/whatwedo/cashManagement" element={ <WhatWeDo /> } />
        <Route path="/whatwedo/investmentManagement" element={ <WhatWeDo /> } />
        <Route path="/whatwedo/estatePlanning" element={ <WhatWeDo /> } />
        <Route path="/whatwedo/businessOwner" element={ <WhatWeDo /> } />
        {/* <Route path="/retirementPlanning" element={<WhatWeDo />} />
        <Route path="/cashManagement" element={<WhatWeDo />} />
        <Route path="/investmentManagement" element={<WhatWeDo />} />
        <Route path="/estatePlanning" element={<WhatWeDo />} />
        <Route path="/businessOwner" element={<WhatWeDo />} /> */}
        
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
      <Footer/>
    </Router>
  );
}

export default App;
