import {FaColumns,FaTags,FaLaptopCode,FaLock} from 'react-icons/fa';

function Advantages() {
    return (
        <section className="container mb-5">
            <div className="text-center mb-4">
                <h2>Why Choose PromptNest?</h2>
                <p className="text-muted">
                    Built specifically for prompt power users who value speed, organization, and privacy.
                </p>
            </div>

            <div className="row gy-4">
                {/* Sidebar Access */}
                <div className="col-md-6 col-lg-3 text-center">
                    <FaColumns size={36} className="text-primary mb-2" />
                    <h5 className="text-primary">Sidebar Access</h5>
                    <p className="text-muted">
                        Open PromptNest as a sidebar panel on ChatGPT, Gemini, and Claude. Browse and insert prompts without leaving your chat.
                    </p>
                </div>

                {/* Organization */}
                <div className="col-md-6 col-lg-3 text-center">
                    <FaTags size={36} className="text-primary mb-2" />
                    <h5 className="text-primary">Fully Organized</h5>
                    <p className="text-muted">
                        Tag and categorize prompts so your entire creative workflow stays clean and searchable.
                    </p>
                </div>

                {/* Developer-Friendly */}
                <div className="col-md-6 col-lg-3 text-center">
                    <FaLaptopCode size={36} className="text-primary mb-2" />
                    <h5 className="text-primary">Built for Power Users</h5>
                    <p className="text-muted">
                        Designed for creators, devs, marketers, and anyone using AI daily—not just hobbyists.
                    </p>
                </div>

                {/* Private by Default */}
                <div className="col-md-6 col-lg-3 text-center">
                    <FaLock size={36} className="text-primary mb-2" />
                    <h5 className="text-primary">Privacy First</h5>
                    <p className="text-muted">
                        Your prompts are stored locally in your browser. No tracking. No cloud sync. 100% yours.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Advantages;
