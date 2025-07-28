import CallToAction from "./CallToAction";

function Hero() {
    return (
        <section className="text-center mb-5">
            <h1 className="display-4 text-primary fw-bold">PromptNest</h1>
            <p className="lead text-muted mt-3">
                Your personal prompt library for ChatGPT. Save, organize, and reuse your best ideas effortlessly.
            </p>
            <CallToAction />
        </section>
    );
}

export default Hero;