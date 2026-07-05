import { FaColumns, FaTags, FaLaptopCode, FaLock } from 'react-icons/fa';

function Advantages() {
    const advantages = [
        {
            icon: <FaColumns size={24} style={{ color: '#7c3aed' }} />,
            title: 'Sidebar Access',
            desc: 'Open PromptNest as a sidebar panel on ChatGPT, Gemini, Claude, Copilot, and Perplexity. Browse and insert prompts without leaving your chat.',
        },
        {
            icon: <FaTags size={24} style={{ color: '#7c3aed' }} />,
            title: 'Fully Organized',
            desc: 'Tag and categorize prompts so your entire creative workflow stays clean and searchable.',
        },
        {
            icon: <FaLaptopCode size={24} style={{ color: '#7c3aed' }} />,
            title: 'Power Features',
            desc: 'Reusable {variable} templates, prompt chaining, version history, keyboard shortcuts, and right-click capture from any page.',
        },
        {
            icon: <FaLock size={24} style={{ color: '#7c3aed' }} />,
            title: 'Privacy First',
            desc: 'Your prompts stay local in your browser by default. No tracking. Cloud sync is optional and opt-in. 100% yours.',
        },
    ];

    return (
        <section className="container mb-5">
            <div className="text-center mb-4">
                <h2 className="fw-bold">Why Choose PromptNest?</h2>
                <p className="text-muted">
                    Built specifically for prompt power users who value speed, organization, and privacy.
                </p>
            </div>

            <div className="row gy-4">
                {advantages.map((a, idx) => (
                    <div className="col-md-6 col-lg-3 text-center" key={idx}>
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
                                    {a.icon}
                                </div>
                                <h5 className="fw-semibold">{a.title}</h5>
                                <p className="text-muted mb-0">{a.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Advantages;
