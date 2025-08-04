import CallToAction from "./CallToAction";

function Hero() {
    return (
        <section className="text-center mb-5">
            <h1 className="display-4 text-primary fw-bold">Never Lose a Great Prompt Again</h1>
            <p className="lead text-muted mt-3">
                PromptNest helps creators, marketers, and developers organize their best AI prompts in one simple Chrome extension. <a href="#privacy">Privacy Policy</a>
            </p>
            <a
                href="https://chromewebstore.google.com/detail/promptnest/aenppnhnjnpbbkblfamhmophfnbhkdmp?authuser=0&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg mt-3"
            >
                Add to Chrome — It's Free
            </a>


        </section>
    );
}

export default Hero;