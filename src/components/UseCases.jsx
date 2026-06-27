import { FaPenNib, FaBullhorn, FaGraduationCap, FaCode } from 'react-icons/fa';

function UseCases() {
    const cases = [
        {
            icon: <FaPenNib size={24} style={{ color: '#7c3aed' }} />,
            title: 'Content Creators',
            desc: 'Turn your best hooks, outlines, and titles into fill-in templates you can reuse across every piece.',
        },
        {
            icon: <FaBullhorn size={24} style={{ color: '#7c3aed' }} />,
            title: 'Marketers & SEO Pros',
            desc: 'Store winning ad-copy prompts and A/B-testing variants so campaigns stay consistent—and fast.',
        },
        {
            icon: <FaGraduationCap size={24} style={{ color: '#7c3aed' }} />,
            title: 'Students & Researchers',
            desc: 'Keep citation, summarization, and study-guide prompts at your fingertips for every class or paper.',
        },
        {
            icon: <FaCode size={24} style={{ color: '#7c3aed' }} />,
            title: 'Developers & Analysts',
            desc: 'Reuse code-generation, debugging, and data-exploration prompts without digging through old chats.',
        },
    ];

    return (
        <section className="text-center mb-5 container">
            <h2 className="fw-bold mb-4">Who Is It For?</h2>
            <div className="row gy-4">
                {cases.map((c, idx) => (
                    <div className="col-sm-6 col-lg-3" key={idx}>
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
                                    {c.icon}
                                </div>
                                <h5 className="fw-semibold">{c.title}</h5>
                                <p className="text-muted mb-0">{c.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default UseCases;
