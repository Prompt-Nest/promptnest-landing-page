import { FaChrome, FaArrowRight } from 'react-icons/fa';

function Hero() {
    return (
        <section className="text-center mb-5">
            <div
                className="text-white rounded-4 p-5 mb-4"
                style={{
                    background: 'linear-gradient(135deg, #7c3aed, #6366f1)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h1 className="display-4 fw-bold mb-3">
                        Save, Organize & Reuse Your AI Prompts — With Fill-in Variables
                    </h1>
                    <p className="lead mb-4" style={{ maxWidth: 700, margin: '0 auto', opacity: 0.9 }}>
                        PromptNest is a Chrome extension with a sidebar panel that works on ChatGPT, Gemini, Claude, Copilot, and Perplexity. Build reusable prompt templates with {'{variables}'}, organize them with folders and tags, chain prompts into multi-step workflows, and insert them into any chat with one click. Free for up to 10 prompts — upgrade to Pro for unlimited storage, Google Sheets sync, and bulk import/export.
                    </p>
                    <a
                        href="https://chromewebstore.google.com/detail/promptnest/aenppnhnjnpbbkblfamhmophfnbhkdmp?authuser=0&hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-lg text-white fw-semibold"
                        style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}
                    >
                        <FaChrome className="me-2" /> Add to Chrome - Try Free (10 prompts) <FaArrowRight className="ms-2" />
                    </a>
                    <p className="mt-3 mb-0" style={{ opacity: 0.7 }}>
                        <a href="#privacy" className="text-white text-decoration-underline">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
