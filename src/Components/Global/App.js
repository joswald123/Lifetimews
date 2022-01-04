import './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

// ----Services pages -----------------------------------
import FinancialPlanning from '../Pages/FinancialPlanning';
import RetirementPlannig from '../Pages/RetirementPlanning'
import CashManagement from '../Pages/CashManagement';
import InvestmentManagement from '../Pages/InvestmentManagement';
import EstatePlanning from '../Pages/EstatePlanning';
import BusinessOwner from '../Pages/BusinessOwners';
// ----Services pages -----------------------------------

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
        <Route path="/financialPlanning" element={<FinancialPlanning />} />
        <Route path="/retirementPlanning" element={<RetirementPlannig />} />
        <Route path="/cashManagement" element={<CashManagement />} />
        <Route path="/investmentManagement" element={<InvestmentManagement />} />
        <Route path="/estatePlanning" element={<EstatePlanning />} />
        <Route path="/businessOwner" element={<BusinessOwner />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
      <Footer/>
    </Router>
  );
}

export default App;
