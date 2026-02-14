import { FaQuestionCircle } from 'react-icons/fa';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const faqs = [
    {
        question: 'What is PromptNest?',
        answer: 'PromptNest is a Chrome extension that helps you save, organize, and reuse prompts on ChatGPT, Gemini, and Claude. It opens as a sidebar panel right next to your chat so you can browse your saved prompts and insert them with one click.',
    },
    {
        question: 'Where are my prompts stored?',
        answer: 'All your prompts are stored locally in your browser. We do not collect or store any of your data externally.',
    },
    {
        question: 'Is PromptNest free to use?',
        answer: 'Yes — PromptNest offers a free tier that stores up to 10 prompts with tags and basic folders. Pro ($2.99/month) unlocks unlimited storage, full nested folders, and CSV bulk import/export. You can download ready-made CSV templates (for example, YouTube creator templates) from the landing page to get started.',
    },
    {
        question: 'Which AI platforms does PromptNest support?',
        answer: 'PromptNest works as a sidebar panel on ChatGPT, Gemini, and Claude. You can also use the popup on any webpage to save and copy prompts.',
    },
    {
        question: 'Do my prompts sync across devices?',
        answer: 'Currently, prompts are stored locally in your browser and do not sync across devices. You can use CSV export/import (Pro feature) to manually transfer prompts between browsers.',
    },
    {
        question: 'How do I uninstall PromptNest?',
        answer: 'Right-click the PromptNest icon in your Chrome toolbar and select "Remove from Chrome," or go to chrome://extensions, find PromptNest, and click Remove. All locally stored data will be deleted when the extension is removed.',
    },
    {
        question: 'How do I cancel my Pro subscription?',
        answer: 'You can cancel your Pro subscription at any time from the extension\'s settings page. Your subscription will remain active until the end of the current billing period, after which your account will revert to the free tier.',
    },
];

function Faq() {
    return (
        <section className="container mb-5">
            <div className="text-center mb-4">
                <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                        width: 56,
                        height: 56,
                        background: 'rgba(124, 58, 237, 0.1)',
                    }}
                >
                    <FaQuestionCircle size={24} style={{ color: '#7c3aed' }} />
                </div>
                <h2 className="fw-bold">Frequently Asked Questions</h2>
                <p className="text-muted">Here you can find answers to the most common questions.</p>
            </div>

            <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                    <div className="accordion accordion-flush" id="faqAccordion">
                        {faqs.map((faq, idx) => {
                            const id = `faq${idx}`;
                            return (
                                <div className="accordion-item" key={idx}>
                                    <h2 className="accordion-header" id={`heading-${id}`}>
                                        <button
                                            className={`accordion-button fw-semibold${idx === 0 ? '' : ' collapsed'}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse-${id}`}
                                            aria-expanded={idx === 0 ? 'true' : 'false'}
                                            aria-controls={`collapse-${id}`}
                                        >
                                            {faq.question}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse-${id}`}
                                        className={`accordion-collapse collapse${idx === 0 ? ' show' : ''}`}
                                        aria-labelledby={`heading-${id}`}
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body text-muted">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
