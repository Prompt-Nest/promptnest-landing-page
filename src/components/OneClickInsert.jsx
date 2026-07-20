import { FaMousePointer, FaBolt, FaComments, FaArrowRight } from 'react-icons/fa';
import { CWS_URL } from '../constants';

function OneClickInsert() {
    return (
        <section className="mb-5">
            {/* Hero banner */}
            <div
                className="text-center text-white rounded-4 p-5 mb-4"
                style={{
                    background: 'linear-gradient(135deg, #7c3aed, #6366f1)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <FaMousePointer size={48} className="mb-3" style={{ opacity: 0.9 }} />
                    <h2 className="fw-bold mb-3">One Click. Prompt Inserted.</h2>
                    <p className="lead mb-0" style={{ maxWidth: 600, margin: '0 auto', opacity: 0.9 }}>
                        Click any saved prompt and it instantly appears in the ChatGPT, Gemini, Claude, Copilot, or Perplexity input box. No copying, no pasting, no switching tabs.
                    </p>
                </div>
            </div>

            {/* How it works steps */}
            <div className="row gy-4 text-center">
                <div className="col-md-4">
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
                                <FaComments size={24} style={{ color: '#7c3aed' }} />
                            </div>
                            <h5 className="fw-semibold">Open the Sidebar</h5>
                            <p className="text-muted mb-0">
                                While chatting on ChatGPT, Gemini, Claude, Copilot, or Perplexity, open the PromptNest sidebar panel right alongside your conversation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
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
                                <FaMousePointer size={24} style={{ color: '#7c3aed' }} />
                            </div>
                            <h5 className="fw-semibold">Click a Prompt</h5>
                            <p className="text-muted mb-0">
                                Browse your saved prompts by folder or search by tag. Tap any prompt card to select it.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
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
                                <FaBolt size={24} style={{ color: '#7c3aed' }} />
                            </div>
                            <h5 className="fw-semibold">Instantly Inserted</h5>
                            <p className="text-muted mb-0">
                                Your prompt is automatically typed into the chat input box, ready to send. Zero friction, zero wasted time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-4">
                <a
                    href={CWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg text-white fw-semibold"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #6366f1)', border: 'none' }}
                >
                    Try One-Click Insertion <FaArrowRight className="ms-2" />
                </a>
            </div>
        </section>
    );
}

export default OneClickInsert;
