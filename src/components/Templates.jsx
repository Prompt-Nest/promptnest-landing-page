import { FaPuzzlePiece, FaKeyboard, FaMagic, FaArrowRight } from 'react-icons/fa';

const example = {
    title: 'Blog Post Outline',
    prompt: 'Write a detailed blog post outline about {topic} aimed at {audience}. Use a {tone} tone and include {section_count} main sections.',
    variables: ['topic', 'audience', 'tone', 'section_count'],
};

function Templates() {
    return (
        <section className="container mb-5">
            <div className="text-center mb-4">
                <h2 className="fw-bold">Reusable Templates with Fill-in Variables</h2>
                <p className="text-muted" style={{ maxWidth: 640, margin: '0 auto' }}>
                    Turn any prompt into a reusable template. Add <code>{'{variables}'}</code> for the parts that change,
                    and PromptNest asks you to fill them in right before the prompt drops into ChatGPT, Gemini, or Claude.
                </p>
            </div>

            <div className="row gy-4 align-items-stretch">
                {/* Template card */}
                <div className="col-lg-6">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <FaPuzzlePiece size={20} style={{ color: '#7c3aed' }} className="me-2" />
                                <h5 className="fw-semibold mb-0">{example.title}</h5>
                            </div>
                            <p className="text-muted" style={{ whiteSpace: 'pre-wrap' }}>
                                {example.prompt.split(/(\{[^}]+\})/).map((part, i) =>
                                    /^\{[^}]+\}$/.test(part) ? (
                                        <span
                                            key={i}
                                            className="fw-semibold"
                                            style={{ color: '#7c3aed', background: 'rgba(124, 58, 237, 0.1)', borderRadius: 4, padding: '0 4px' }}
                                        >
                                            {part}
                                        </span>
                                    ) : (
                                        part
                                    )
                                )}
                            </p>
                            <p className="mb-0">
                                {example.variables.map((v, i) => (
                                    <span
                                        key={i}
                                        className="badge me-1"
                                        style={{ background: 'rgba(124, 58, 237, 0.1)', color: '#7c3aed' }}
                                    >
                                        {v}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Steps */}
                <div className="col-lg-6">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex mb-3">
                                <FaPuzzlePiece size={20} style={{ color: '#7c3aed' }} className="me-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h6 className="fw-semibold mb-1">Write it once</h6>
                                    <p className="text-muted mb-0">Wrap the parts that change in <code>{'{curly_braces}'}</code>.</p>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <FaKeyboard size={20} style={{ color: '#7c3aed' }} className="me-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h6 className="fw-semibold mb-1">Fill it in</h6>
                                    <p className="text-muted mb-0">A quick popup collects each value when you insert the prompt.</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <FaMagic size={20} style={{ color: '#7c3aed' }} className="me-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h6 className="fw-semibold mb-1">Insert anywhere</h6>
                                    <p className="text-muted mb-0">The finished prompt lands in your AI chat, ready to send.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-4">
                <a
                    href="https://chromewebstore.google.com/detail/promptnest/aenppnhnjnpbbkblfamhmophfnbhkdmp?authuser=0&hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-lg text-white fw-semibold"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #6366f1)', border: 'none' }}
                >
                    Add to Chrome <FaArrowRight className="ms-2" />
                </a>
            </div>
        </section>
    );
}

export default Templates;
