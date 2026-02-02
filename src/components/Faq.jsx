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
                            PromptNest is a Chrome extension that helps you save, organize, and reuse prompts on ChatGPT, Gemini, and Claude. It opens as a sidebar panel right next to your chat so you can browse your saved prompts and insert them with one click.
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
                            Yes — PromptNest offers a free tier that stores up to 10 prompts with tags and basic folders. Pro ($2.99/month) unlocks unlimited storage, full nested folders, and CSV bulk import/export. You can download ready-made CSV templates (for example, YouTube creator templates) from the landing page to get started.
                        </div>
                    </div>
                </div>

                {/* FAQ 4 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                        >
                            Which AI platforms does PromptNest support?
                        </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            PromptNest works as a sidebar panel on ChatGPT, Gemini, and Claude. You can also use the popup on any webpage to save and copy prompts.
                        </div>
                    </div>
                </div>

                {/* FAQ 5 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                        >
                            Do my prompts sync across devices?
                        </button>
                    </h2>
                    <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Currently, prompts are stored locally in your browser and do not sync across devices. You can use CSV export/import (Pro feature) to manually transfer prompts between browsers.
                        </div>
                    </div>
                </div>

                {/* FAQ 6 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                        >
                            How do I uninstall PromptNest?
                        </button>
                    </h2>
                    <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Right-click the PromptNest icon in your Chrome toolbar and select "Remove from Chrome," or go to chrome://extensions, find PromptNest, and click Remove. All locally stored data will be deleted when the extension is removed.
                        </div>
                    </div>
                </div>

                {/* FAQ 7 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                        >
                            How do I cancel my Pro subscription?
                        </button>
                    </h2>
                    <div
                        id="collapseSeven"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            You can cancel your Pro subscription at any time from the extension's settings page. Your subscription will remain active until the end of the current billing period, after which your account will revert to the free tier.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
