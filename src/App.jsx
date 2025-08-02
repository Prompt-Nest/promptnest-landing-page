import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';
import {FaBoxOpen,FaTags,FaSyncAlt,FaChevronLeft,FaChevronRight,FaYoutube,FaBullhorn,FaGraduationCap,FaCode,FaBolt,FaLaptopCode,FaLock,FaCheck,FaTimes,FaInfinity,FaQuestionCircle} from 'react-icons/fa';

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

function App() {
  const slides=[
    {
      img: '2.jpg',
      title: 'Save Prompts',
      desc: 'Capture your most used prompts with one click. Never lose a great idea again.',
    },
    {
      img: '3.jpg',
      title: 'Tag & Categorize',
      desc: 'Organize prompts with tags and categories that make sense to you.',
    },
    {
      img: '1.jpg',
      title: 'Reuse in Seconds',
      desc: 'Copy & paste your prompts instantly into ChatGPT from the extension.',
    },
  ];

  const [current,setCurrent]=useState(0);
  const prevSlide=() => setCurrent((current-1+slides.length)%slides.length);
  const nextSlide=() => setCurrent((current+1)%slides.length);

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
      <Footer />
    </div>
  );
}

export default App;
