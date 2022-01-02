import './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
      <Footer/>
    </Router>
  );
}

export default App;
