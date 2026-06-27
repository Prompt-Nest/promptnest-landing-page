import { FaCheck, FaTimes, FaInfinity } from 'react-icons/fa';

function ComparisonTable() {
    return (
        <section className="container mb-5">
            <div className="text-center mb-4">
                <h2 className="fw-bold">Compare Plans</h2>
                <p className="text-muted">
                    Start free and upgrade when you need unlimited prompts and CSV bulk import/export.
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
                                    <td className="fw-semibold" style={{ color: '#7c3aed' }}>$2.99/month</td>
                                </tr>
                                <tr>
                                    <td className="fw-semibold">Prompt Storage</td>
                                    <td>Up to 10</td>
                                    <td><FaInfinity style={{ color: '#7c3aed' }} /> Unlimited</td>
                                </tr>
                                <tr>
                                    <td className="fw-semibold">Tags & Basic Folders</td>
                                    <td><FaCheck style={{ color: '#7c3aed' }} /></td>
                                    <td><FaCheck style={{ color: '#7c3aed' }} /></td>
                                </tr>
                                <tr>
                                    <td className="fw-semibold">Templates with Fill-in Variables</td>
                                    <td><FaCheck style={{ color: '#7c3aed' }} /></td>
                                    <td><FaCheck style={{ color: '#7c3aed' }} /></td>
                                </tr>
                                <tr>
                                    <td className="fw-semibold">Sidebar Panel (ChatGPT, Gemini, Claude)</td>
                                    <td><FaCheck style={{ color: '#7c3aed' }} /></td>
                                    <td><FaCheck style={{ color: '#7c3aed' }} /></td>
                                </tr>
                                <tr>
                                    <td className="fw-semibold">Bulk Import / Export</td>
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
