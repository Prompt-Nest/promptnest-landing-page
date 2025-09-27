import {FaQuestionCircle} from 'react-icons/fa';
// main.js or main.ts
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Faq() {
    return (
        <section className="container mb-5">
            <div className="text-center mb-4">
                <FaQuestionCircle size={40} className="text-primary mb-2" />
                <h2>Frequently Asked Questions</h2>
                <p className="text-muted">Here you can find answers to the most common questions.</p>
            </div>

            <div className="accordion" id="faqAccordion">
                {/* FAQ 1 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            What is PromptNest?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            PromptNest is a Chrome extension that helps you save, organize, and reuse your favorite prompts for ChatGPT and other AI tools.
                        </div>
                    </div>
                </div>

                {/* FAQ 2 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Where are my prompts stored?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            All your prompts are stored locally in your browser. We do not collect or store any of your data externally.
                        </div>
                    </div>
                </div>

                {/* FAQ 3 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Is PromptNest free to use?
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Yes — PromptNest offers a free tier that stores up to 10 prompts. Premium unlocks unlimited storage, CSV bulk import/export, and folder support. You can download ready-made CSV templates (for example, YouTube creator templates) from the landing page to get started.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
