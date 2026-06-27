import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Faq from './components/Faq';
import Advantages from './components/Advantages';
import Comparison from './components/Comparison';
import PrivacyPolicy from './components/PrivacyPolicy';
import Templates from './components/Templates';
import OneClickInsert from './components/OneClickInsert';

function App() {
  return (
    <div className="container py-5">
      <Hero />
      <Features />
      <Templates />
      <OneClickInsert />
      <HowItWorks />
      <UseCases />
      <Advantages />
      <Comparison />
      <Faq />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}

export default App;
