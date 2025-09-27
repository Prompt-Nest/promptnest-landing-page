import CallToAction from "./CallToAction";

function Hero() {
    return (
        <section className="text-center mb-5">
            <h1 className="display-4 text-primary fw-bold">PromptNest for YouTube Creators</h1>
            <p className="lead text-muted mt-3">
                Save and reuse the prompts that power your YouTube workflow — titles, descriptions, thumbnail hooks, chapters, and more. Free tier stores up to 10 prompts; upgrade for unlimited prompts and CSV import/export. <a href="#privacy">Privacy Policy</a>
            </p>
            <a
                href="https://chromewebstore.google.com/detail/promptnest/aenppnhnjnpbbkblfamhmophfnbhkdmp?authuser=0&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg mt-3"
            >
                Add to Chrome - Try Free (10 prompts)
            </a>

        </section>
    );
}

export default Hero;