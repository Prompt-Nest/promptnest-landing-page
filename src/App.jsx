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
import YouTubePrompts from './components/YouTubePrompts';

function App() {
  return (
    <div className="container py-5">
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Advantages />
      <YouTubePrompts />
      <Comparison />
      <Faq />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}

export default App;
