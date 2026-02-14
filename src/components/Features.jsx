import { useState } from 'react';
import { FaBoxOpen, FaTags, FaSyncAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Features() {
    const slides = [
        {
            img: '1.png',
            title: 'Save Prompts',
            desc: 'Save any prompt with a title, body, and tags — your ideas, your way',
        },
        {
            img: '2.png',
            title: 'Tag & Categorize',
            desc: 'Organize and filter your prompt collection in seconds',
        },
        {
            img: '3.png',
            title: 'Access Anytime',
            desc: 'Open the sidebar on ChatGPT, Gemini, or Claude and insert prompts with one click',
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
            icon: <FaSyncAlt size={24} style={{ color: '#7c3aed' }} />,
            title: 'Reuse in Seconds',
            desc: 'Open the sidebar on ChatGPT, Gemini, or Claude and insert your prompts with one click.',
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
