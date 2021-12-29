import './App';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import ErrorPage from './Components/Pages/ErrorPage';

function App() {
  return (
    <Router>
      {/* Navbar comes here */}
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> AboutUs </Link>
        <Link to="/contact"> Contact </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div> Footer </div>
    </Router>
  );
}

export default App;
