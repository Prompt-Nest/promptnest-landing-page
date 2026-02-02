function HowItWorks() {
    return (
        <section className="text-center mb-5 container">
            <h2 className="mb-4">How It Works</h2>
            <div className="row">
                <div className="col-md-4">
                    <h4 className="text-primary">1. Save Prompts Instantly</h4>
                    <p className="text-muted">
                        Open the PromptNest sidebar or popup, type or paste your prompt, add a title and tags, and save. Your prompts are stored locally in the extension.
                    </p>
                </div>
                <div className="col-md-4">
                    <h4 className="text-primary">2. Organize with Tags</h4>
                    <p className="text-muted">
                        Tag your prompts by topic, tone, or use-case so you can find them quickly when creativity strikes again.
                    </p>
                </div>
                <div className="col-md-4">
                    <h4 className="text-primary">3. Use and Reuse</h4>
                    <p className="text-muted">
                        Open the sidebar on ChatGPT, Gemini, or Claude, find your saved prompt, and insert it into the active chat with one click — no copy-paste needed.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
