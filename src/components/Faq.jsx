import { FaQuestionCircle } from 'react-icons/fa';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const faqs = [
    {
        question: 'Is PromptNest free?',
        answer: 'Yes — the free plan includes 25 prompts and every core feature: the sidebar on all supported AI sites, fill-in template variables, folders, tags, search, one-click insert, and CSV/JSON export. Pro ($4.99/month or $39/year, with a 7-day free trial) unlocks unlimited prompts, folders, and chains, full version history, bulk import, and Google Sheets sync.',
    },
    {
        question: 'Where are my prompts stored?',
        answer: 'Locally in your browser. Nothing is sent to a server — PromptNest works without an account or email. Google Sheets sync is strictly opt-in (Pro), and even then the sheet lives in your own Google account.',
    },
    {
        question: 'What is PromptNest?',
        answer: 'PromptNest is a Chrome extension that helps you save, organize, and reuse prompts on ChatGPT, Gemini, Claude, Copilot, and Perplexity. It opens as a sidebar panel right next to your chat so you can browse your saved prompts and insert them with one click.',
    },
    {
        question: 'Which AI platforms does PromptNest support?',
        answer: 'PromptNest works as a sidebar panel on ChatGPT, Gemini, Claude, Copilot, and Perplexity. You can also use the popup on any webpage to save and copy prompts.',
    },
    {
        question: 'What are template variables?',
        answer: 'Wrap any part of a prompt in curly braces, like {topic} or {audience}, to turn it into a reusable template. When you insert a prompt that contains variables, PromptNest pops up a quick form to fill in each value before the finished text drops into your AI chat. Write a prompt once, reuse it for everything.',
    },
    {
        question: 'Can I save text I find around the web?',
        answer: 'Yes. Highlight any text on a page, right-click, and choose "Save to PromptNest" to capture it as a new prompt without opening the popup. You can also press Ctrl+S (Cmd+S on Mac) while typing in a supported AI chat box to capture what you have written, or Ctrl+Shift+P (Cmd+Shift+P) to open PromptNest and jump straight to search.',
    },
    {
        question: 'Can I chain prompts and track edit history?',
        answer: 'Yes. Prompt chaining lets you link several prompts into an ordered sequence and run them step by step — ideal for repeatable, multi-stage workflows. Every prompt also keeps a version history: each edit is snapshotted so you can compare versions with an inline diff and revert with a single click. Free includes 1 chain and the 3 most recent versions per prompt; Pro unlocks unlimited chains and full history.',
    },
    {
        question: 'Do my prompts sync across devices?',
        answer: 'Prompts are stored locally in your browser by default. Pro users can turn on two-way Google Sheets sync to back up their library and access it across devices — PromptNest connects to a sheet in your own Google account using a scope limited to the files it creates. You can also use CSV/JSON export and import to move prompts between browsers manually.',
    },
    {
        question: 'How do I uninstall PromptNest?',
        answer: 'Right-click the PromptNest icon in your Chrome toolbar and select "Remove from Chrome," or go to chrome://extensions, find PromptNest, and click Remove. All locally stored data will be deleted when the extension is removed.',
    },
    {
        question: 'How do I cancel my Pro subscription?',
        answer: 'You can cancel your Pro subscription at any time. Open PromptNest and choose to manage your subscription — this opens the secure Stripe billing portal where you can cancel. Your subscription stays active until the end of the current billing period, after which your account reverts to the free tier.',
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
