import { FaSave, FaTags, FaRocket } from 'react-icons/fa';

function HowItWorks() {
    const steps = [
        {
            icon: <FaSave size={24} style={{ color: '#7c3aed' }} />,
            title: '1. Save Prompts Instantly',
            desc: 'Open the PromptNest sidebar or popup, type or paste your prompt, add a title and tags, and save. Your prompts are stored locally in the extension.',
        },
        {
            icon: <FaTags size={24} style={{ color: '#7c3aed' }} />,
            title: '2. Organize with Tags',
            desc: 'Tag your prompts by topic, tone, or use-case so you can find them quickly when creativity strikes again.',
        },
        {
            icon: <FaRocket size={24} style={{ color: '#7c3aed' }} />,
            title: '3. Use and Reuse',
            desc: 'Open the sidebar on ChatGPT, Gemini, or Claude, find your saved prompt, and insert it into the active chat with one click — no copy-paste needed.',
        },
    ];

    return (
        <section className="text-center mb-5 container">
            <h2 className="fw-bold mb-4">How It Works</h2>
            <div className="row gy-4">
                {steps.map((s, idx) => (
                    <div className="col-md-4" key={idx}>
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                                <div
                                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                    style={{
                                        width: 56,
                                        height: 56,
                                        background: 'rgba(124, 58, 237, 0.1)',
                                    }}
                                >
                                    {s.icon}
                                </div>
                                <h5 className="fw-semibold">{s.title}</h5>
                                <p className="text-muted mb-0">{s.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HowItWorks;
