import {FaYoutube,FaBullhorn,FaGraduationCap,FaCode} from 'react-icons/fa';

function UseCases() {
    return (
        <section className="text-center mb-5 container">
            <h2 className="mb-4">Who Is It For?</h2>

            <div className="row gy-4">
                {/* Creators */}
                <div className="col-sm-6 col-lg-3">
                    <FaYoutube size={32} className="text-primary mb-2" />
                    <h5 className="text-primary">Content Creators</h5>
                    <p className="text-muted">
                        Batch‑produce YouTube titles, thumbnails hooks, or podcast show notes without repeating yourself.
                    </p>
                </div>

                {/* Marketers */}
                <div className="col-sm-6 col-lg-3">
                    <FaBullhorn size={32} className="text-primary mb-2" />
                    <h5 className="text-primary">Marketers & SEO Pros</h5>
                    <p className="text-muted">
                        Store winning ad‑copy prompts and A/B‑testing variants so campaigns stay consistent—and fast.
                    </p>
                </div>

                {/* Students */}
                <div className="col-sm-6 col-lg-3">
                    <FaGraduationCap size={32} className="text-primary mb-2" />
                    <h5 className="text-primary">Students & Researchers</h5>
                    <p className="text-muted">
                        Keep citation, summarization, and study‑guide prompts at your fingertips for every class or paper.
                    </p>
                </div>

                {/* Developers */}
                <div className="col-sm-6 col-lg-3">
                    <FaCode size={32} className="text-primary mb-2" />
                    <h5 className="text-primary">Developers & Analysts</h5>
                    <p className="text-muted">
                        Reuse code‑generation, debugging, and data‑exploration prompts without digging through old chats.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default UseCases;
