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
      {/* <h2>Example Json File</h2> */}
      {/* <pre>{`
{
  "prompts": [
    {
      "created": "7/24/2025, 9:00:00 AM",
      "folder": "Learning",
      "tags": "Learning, Beginner",
      "text": "I'm new to INSERT_TOPIC. Can you explain it to me like I'm five, using analogies if possible?",
      "title": "Learn a New Concept"
    },
    {
      "created": "7/25/2025, 10:30:00 AM",
      "folder": "YouTube",
      "tags": "YouTube, Scripting",
      "text": "I want to make a YouTube video about INSERT_TOPIC. Generate a detailed script outline with intro, sections, and CTA.",
      "title": "Generate YouTube Script Outline"
    },
    {
      "created": "7/26/2025, 1:00:00 PM",
      "folder": "Startup",
      "tags": "Startup, Ideation",
      "text": "Give me 5 creative micro-SaaS business ideas targeting INSERT_NICHE.",
      "title": "Brainstorm Business Ideas"
    },
    {
      "created": "7/27/2025, 4:00:00 PM",
      "folder": "YouTube",
      "tags": "YouTube, Essay, Creator",
      "text": "Create a long-form YouTube essay script about INSERT_TOPIC. Use a thoughtful, narrative structure with personal reflection, societal context, and clear takeaways. Imagine a calm narrator like Philosophy Tube or Veritasium is reading it.",
      "title": "YouTube Creator: Long-Form Essay Script"
    },
    {
      "created": "7/28/2025, 8:45:00 AM",
      "folder": "Roleplay",
      "tags": "AI Roleplay, Knowledge",
      "text": "You are a world-renowned expert in INSERT_FIELD. Simulate an in-depth interview where you're asked probing questions about INSERT_TOPIC. Answer each question with technical depth but conversational tone, like you're on a podcast.",
      "title": "Interview: Simulated Expert on Demand"
    }
  ]
}
`}</pre> */}
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