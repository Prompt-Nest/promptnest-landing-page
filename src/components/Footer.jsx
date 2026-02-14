function Footer() {
    return (
        <footer className="text-center mt-5">
            <p className="text-muted" style={{ opacity: 0.7 }}>
                &copy; {new Date().getFullYear()} PromptNest. Built for creators by creators.
            </p>
        </footer>
    );
}

export default Footer;
