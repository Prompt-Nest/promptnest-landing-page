import { FaDownload, FaArrowRight } from 'react-icons/fa';

function downloadCSV() {
    const rows = [
        ['title', 'prompt', 'tags'],
        ...examplePrompts.map(p => [p.title, p.prompt, p.tags])
    ];

    const escapeCell = (cell) => {
        if (cell == null) return '';
        const asString = String(cell);
        if (asString.includes('"') || asString.includes(',') || asString.includes('\n')) {
            return `"${asString.replace(/"/g, '""')}"`;
        }
        return asString;
    };

    const csvContent = rows.map(r => r.map(escapeCell).join(',')).join('\n');

    const bom = '\uFEFF';
    const blob = new Blob([bom + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'youtube-prompts-template.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}

const examplePrompts = [
    {
        title: 'Hook + Teaser',
        prompt: "Write a 15-20 second hook for a YouTube video about {topic} that teases a surprising result and invites viewers to watch until the end.",
        tags: 'hook,shorts,engagement'
    },
    {
        title: 'SEO Title + Keywords',
        prompt: "Generate an SEO-optimized YouTube title for a video about {topic}. Include main keyword and keep under 60 characters.",
        tags: 'title,seo'
    },
    {
        title: 'Video Description',
        prompt: "Write a 3-paragraph YouTube video description for a video about {topic} with timestamps, CTAs, and relevant hashtags.",
        tags: 'description,seo,cta'
    },
    {
        title: 'Thumbnail Text Options',
        prompt: "Suggest 5 short thumbnail text options (2-4 words) that maximize curiosity for a video on {topic}.",
        tags: 'thumbnail,copy'
    },
];

function YouTubePrompts() {
    return (
        <section className="container mb-5">
            <div className="text-center mb-4">
                <h2 className="fw-bold">Example: YouTube Creator Prompts</h2>
                <p className="text-muted">
                    Here's one sample template set you can import into PromptNest. Build your own collections for any workflow.
                </p>
            </div>

            <div className="row gy-3">
                {examplePrompts.map((p, idx) => (
                    <div className="col-md-6" key={idx}>
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                                <h5 className="fw-semibold">{p.title}</h5>
                                <p className="text-muted" style={{ whiteSpace: 'pre-wrap' }}>{p.prompt}</p>
                                <p className="mb-0">
                                    {p.tags.split(',').map((tag, i) => (
                                        <span
                                            key={i}
                                            className="badge me-1"
                                            style={{ background: 'rgba(124, 58, 237, 0.1)', color: '#7c3aed' }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-4">
                <button
                    className="btn btn-lg text-white fw-semibold me-2"
                    onClick={downloadCSV}
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #6366f1)', border: 'none' }}
                >
                    <FaDownload className="me-2" /> Download CSV Template
                </button>
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

export default YouTubePrompts;
