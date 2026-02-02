function Hero() {
    return (
        <section className="text-center mb-5">
            <h1 className="display-4 text-primary fw-bold">Save, Organize & Reuse Your Best AI Prompts</h1>
            <p className="lead text-muted mt-3">
                PromptNest is a Chrome extension with a sidebar panel that works on ChatGPT, Gemini, and Claude. Save prompts with tags, organize with folders, and insert them into any chat with one click. Free for up to 10 prompts — upgrade to Pro for unlimited storage and more. <a href="#privacy">Privacy Policy</a>
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
