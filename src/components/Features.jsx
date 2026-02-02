
import {useState} from 'react';
import {FaBoxOpen,FaTags,FaSyncAlt,FaChevronLeft,FaChevronRight} from 'react-icons/fa';

function Features() {
    const slides=[
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

    const [current,setCurrent]=useState(0);
    const prevSlide=() => setCurrent((current-1+slides.length)%slides.length);
    const nextSlide=() => setCurrent((current+1)%slides.length);

    return (
        <>
            <section className="row text-center mb-5">
                <div className="col-md-4">
                    <h3 className="text-secondary"><FaBoxOpen className="mb-2" /> Save Prompts</h3>
                    <p>Save any prompt with a title, body, and tags. Never lose a great idea again.</p>
                </div>
                <div className="col-md-4">
                    <h3 className="text-secondary"><FaTags className="mb-2" /> Tag & Categorize</h3>
                    <p>Organize prompts with tags and categories that make sense to you.</p>
                </div>
                <div className="col-md-4">
                    <h3 className="text-secondary"><FaSyncAlt className="mb-2" /> Reuse in Seconds</h3>
                    <p>Open the sidebar on ChatGPT, Gemini, or Claude and insert your prompts with one click.</p>
                </div>
            </section>

            {/* Carousel section */}
            <section className="text-center mb-5">
                <div style={{margin: '0 auto',position: 'relative'}}>
                    <div style={{position: 'relative',minHeight: 600,background: '#f8f9fa',borderRadius: 12,boxShadow: '0 2px 8px #0001',padding: 24}}>
                        <button
                            aria-label="Previous"
                            onClick={prevSlide}
                            style={{position: 'absolute',left: 8,top: '50%',transform: 'translateY(-50%)',background: 'none',border: 'none',fontSize: 28,color: '#007bff',cursor: 'pointer',zIndex: 2}}
                        >
                            <FaChevronLeft />
                        </button>
                        <div>
                            <p className="text-muted">{slides[current].desc}</p>
                            <img src={slides[current].img} alt={slides[current].title} className="img-fluid mb-3" style={{maxHeight: 600}} />
                        </div>
                        <button
                            aria-label="Next"
                            onClick={nextSlide}
                            style={{position: 'absolute',right: 8,top: '50%',transform: 'translateY(-50%)',background: 'none',border: 'none',fontSize: 28,color: '#007bff',cursor: 'pointer',zIndex: 2}}
                        >
                            <FaChevronRight />
                        </button>
                        <div style={{position: 'absolute',bottom: 10,left: 0,right: 0,textAlign: 'center'}}>
                            {slides.map((_,idx) => (
                                <span
                                    key={idx}
                                    style={{
                                        display: 'inline-block',
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        background: idx===current? '#007bff':'#ccc',
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
