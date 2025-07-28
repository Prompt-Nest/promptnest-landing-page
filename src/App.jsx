import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // optional if you want to add custom styles

import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import CallToAction from './components/CallToAction';
import Faq from './components/Faq';
import Advantages from './components/Advantages'; // Assuming you have an Advantages component
import Comparison from './components/Comparison';
function App() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      <hr />
      {/* How It Works Section */}
      <HowItWorks />
      <hr />
      {/* Use Cases Section */}
      <UseCases />
      <hr />
      {/* Advantages Section */}
      <Advantages />
      {/* Comparison Section */}
      <Comparison />

      {/* Call to Action Section */}
      <CallToAction />
      {/* FAQ Section */}
      <hr />
      <Faq />
      <hr />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
