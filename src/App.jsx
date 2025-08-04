import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import {useState} from 'react';
import {
  FaBoxOpen,FaTags,FaSyncAlt,FaChevronLeft,FaChevronRight,FaYoutube,
  FaBullhorn,FaGraduationCap,FaCode,FaBolt,FaLaptopCode,FaLock,
  FaCheck,FaTimes,FaInfinity,FaQuestionCircle
} from 'react-icons/fa';

// Components
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import CallToAction from './components/CallToAction';
import Faq from './components/Faq';
import Advantages from './components/Advantages';
import Comparison from './components/Comparison';
import PrivacyPolicy from './components/PrivacyPolicy';

// Pages
import Blog from './pages/Blog';
import Post from './pages/Post';

function Home() {
  return (
    <div className="container py-5">
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Advantages />
      <Comparison />
      <Faq />
      <CallToAction />
      <h2 id="privacy">Privacy Policy</h2>
      <PrivacyPolicy />
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        <Link className="navbar-brand" to="/">PromptNest</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/promptnest-landing-page/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/promptnest-landing-page/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/promptnest-landing-page/#privacy">Privacy</a>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/promptnest-landing-page/" element={<Home />} />
        <Route path="promptnest-landing-page/blog" element={<Blog />} />
        <Route path="/promptnest-landing-page/blog/:slug" element={<Post />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
