import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
  return (
    <div className="container py-5">
      <Hero />
      <Features />
      <hr />
      <HowItWorks />
      <hr />
      <UseCases />
      <hr />
      <Advantages />
      <Comparison />
      <CallToAction />
      <hr />
      <Faq />
      <hr />
      <Footer />
    </div>
  );
}

export default App;