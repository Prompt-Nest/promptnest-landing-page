function Footer() {
    return (
        <footer className="text-center mt-5">
            <p className="text-muted" style={{ opacity: 0.7 }}>
                &copy; {new Date().getFullYear()} PromptNest. Your prompt library for ChatGPT, Gemini & Claude.
            </p>
        </footer>
    );
}

export default Footer;
