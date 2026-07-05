import { FaCheck, FaTimes, FaInfinity } from 'react-icons/fa';

function ComparisonTable() {
    return (
        <section className="container mb-5">
            <div className="text-center mb-4">
                <h2 className="fw-bold">Compare Plans</h2>
                <p className="text-muted">
                    Start free and upgrade when you need unlimited prompts, full version history, Google Sheets sync, and bulk import. Pro starts with a 7-day free trial.
                </p>
            </div>

            <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table text-center align-middle mb-0">
                            <thead>
                                <tr style={{ background: 'linear-gradient(135deg, #7c3aed, #6366f1)' }}>
                                    <th scope="col" className="fw-semibold text-white">Feature</th>
                                    <th scope="col" className="fw-semibold text-white">Free</th>
                                    <th scope="col" className="fw-semibold text-white">Pro</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="fw-semibold">Price</td>
                                    <td>Free</td>
                                    <td className="fw-semibold" style={{ color: '#7c3aed' }}>$4.99/month or $39/year</td>
                                </tr>
                                <tr>
                                    <td className="fw-semibold">Prompt Storage</td>
                                    <td>Up to 25</td>
                                    <td><FaInfinity style={{ color: '#7c3aed' }} /> Unlimited</td>
                                </tr>
                                <tr>
                                    <td className="fw-semibold">Tags & Folders</td>
                                    <td>3 folders</td>
                                    <td><FaInfinity style={{ color: '#7c3aed' }} /> Unlimited</td>
                                </tr>
                                <tr>
                                    <td className="fw-semibold">Templates with Fill-in Variables</td>
                                    <td><FaCheck style={{ color: '#7c3aed' }} /></td>
                                    <td><FaCheck style={{ color: '#7c3aed' }} /></td>
                                </tr>
                                <tr>
                                    <td className="fw-semibold">Sidebar (ChatGPT, Gemini, Claude, Copilot, Perplexity)</td>
                                    <td><FaCheck style={{ color: '#7c3aed' }} /></td>
                                    <td><FaCheck style={{ color: '#7c3aed' }} /></td>
                                </tr>
                                <tr>
                                    <td className="fw-semibold">Prompt Chains</td>
                                    <td>1 chain</td>
                                    <td><FaInfinity style={{ color: '#7c3aed' }} /> Unlimited</td>
                                </tr>
                                <tr>
                                    <td className="fw-semibold">Version History</td>
                                    <td>3 most recent versions</td>
                                    <td><FaCheck style={{ color: '#7c3aed' }} /> Full history</td>
                                </tr>
                                <tr>
                                    <td className="fw-semibold">Keyboard Shortcuts & Quick Capture</td>
                                    <td><FaCheck style={{ color: '#7c3aed' }} /></td>
                                    <td><FaCheck style={{ color: '#7c3aed' }} /></td>
                                </tr>
                                <tr>
                                    <td className="fw-semibold">Export (CSV &amp; JSON)</td>
                                    <td><FaCheck style={{ color: '#7c3aed' }} /></td>
                                    <td><FaCheck style={{ color: '#7c3aed' }} /></td>
                                </tr>
                                <tr>
                                    <td className="fw-semibold">Bulk Import (CSV &amp; JSON)</td>
                                    <td><FaTimes className="text-muted" /></td>
                                    <td><FaCheck style={{ color: '#7c3aed' }} /></td>
                                </tr>
                                <tr>
                                    <td className="fw-semibold">Google Sheets Cloud Sync</td>
                                    <td><FaTimes className="text-muted" /></td>
                                    <td><FaCheck style={{ color: '#7c3aed' }} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ComparisonTable;
