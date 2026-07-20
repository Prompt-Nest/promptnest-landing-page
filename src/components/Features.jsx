import { useState } from 'react';
import { FaBoxOpen, FaTags, FaPuzzlePiece, FaHistory, FaLink, FaCloud, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Features() {
    const slides = [
        {
            img: '1.png',
            title: 'Your Prompts.',
            desc: 'Your prompts, one click away - in every AI chat.',
        },
        {
            img: '2.png',
            title: 'Write it once.',
            desc: 'Write it once. Reuse it with {variables}.',
        },
        {
            img: '3.png',
            title: 'Folders.',
            desc: 'Folders, tags, search — find any prompt in seconds.',
        },
        {
            img: '4.png',
            title: 'One Library.',
            desc: 'One library. ChatGPT, Claude, Gemini, Copilot, Perplexity.',
        },
        {
            img: '5.png',
            title: 'Local First.',
            desc: 'Local-first. No account. Your prompts never leave your browser.',
        },
        
    ];

    const [current, setCurrent] = useState(0);
    const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
    const nextSlide = () => setCurrent((current + 1) % slides.length);

    const features = [
        {
            icon: <FaBoxOpen size={24} style={{ color: '#7c3aed' }} />,
            title: 'Save Prompts',
            desc: 'Save any prompt with a title, body, and tags. Never lose a great idea again.',
        },
        {
            icon: <FaTags size={24} style={{ color: '#7c3aed' }} />,
            title: 'Tag & Categorize',
            desc: 'Organize prompts with tags and categories that make sense to you.',
        },
        {
            icon: <FaPuzzlePiece size={24} style={{ color: '#7c3aed' }} />,
            title: 'Fill-in Variables',
            desc: 'Add {variables} to any prompt and fill them in on the fly — one template, endless reuse.',
        },
        {
            icon: <FaHistory size={24} style={{ color: '#7c3aed' }} />,
            title: 'Version History',
            desc: 'Every edit is snapshotted. Compare versions with an inline diff and revert with one click.',
        },
        {
            icon: <FaLink size={24} style={{ color: '#7c3aed' }} />,
            title: 'Prompt Chaining',
            desc: 'Link prompts into a sequence and run them step by step for repeatable, multi-stage workflows.',
        },
        {
            icon: <FaCloud size={24} style={{ color: '#7c3aed' }} />,
            title: 'Google Sheets Sync',
            desc: 'Pro users back up and sync their library across devices with two-way Google Sheets sync.',
        },
    ];

    return (
        <>
            {/* Feature cards */}
            <section className="row gy-4 text-center mb-5">
                {features.map((f, idx) => (
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
                                    {f.icon}
                                </div>
                                <h5 className="fw-semibold">{f.title}</h5>
                                <p className="text-muted mb-0">{f.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Carousel section */}
            <section className="text-center mb-5">
                <div style={{ margin: '0 auto', position: 'relative' }}>
                    <div
                        className="card border-0 shadow-sm"
                        style={{ position: 'relative', minHeight: 600, padding: 24 }}
                    >
                        <button
                            aria-label="Previous"
                            onClick={prevSlide}
                            style={{
                                position: 'absolute',
                                left: 8,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'none',
                                border: 'none',
                                fontSize: 28,
                                color: '#7c3aed',
                                cursor: 'pointer',
                                zIndex: 2,
                            }}
                        >
                            <FaChevronLeft />
                        </button>
                        <div>
                            <p className="text-muted">{slides[current].desc}</p>
                            <img
                                src={slides[current].img}
                                alt={slides[current].title}
                                className="img-fluid mb-3"
                                style={{ maxHeight: 600 }}
                            />
                        </div>
                        <button
                            aria-label="Next"
                            onClick={nextSlide}
                            style={{
                                position: 'absolute',
                                right: 8,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'none',
                                border: 'none',
                                fontSize: 28,
                                color: '#7c3aed',
                                cursor: 'pointer',
                                zIndex: 2,
                            }}
                        >
                            <FaChevronRight />
                        </button>
                        <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, textAlign: 'center' }}>
                            {slides.map((_, idx) => (
                                <span
                                    key={idx}
                                    style={{
                                        display: 'inline-block',
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        background: idx === current ? '#7c3aed' : '#ccc',
                                        margin: '0 4px',
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Features;
