import {FaCheck,FaTimes,FaInfinity} from 'react-icons/fa';

function ComparisonTable() {
    return (
        <section className="container mb-5">
            <div className="text-center mb-4">
                <h2>Compare Plans</h2>
                <p className="text-muted">Creators — start free and upgrade when you need unlimited prompts or CSV import/export for bulk uploads.</p>
            </div>

            <div className="table-responsive">
                <table className="table table-bordered text-center align-middle">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Feature</th>
                            <th scope="col">Free</th>
                            <th scope="col">Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Price</td>
                            <td>Free</td>
                            <td>$2.99/month</td>
                        </tr>
                        <tr>
                            <td>Prompt Storage</td>
                            <td>Up to 10</td>
                            <td><FaInfinity className="text-primary" /> Unlimited</td>
                        </tr>
                        <tr>
                            <td>Tags & Folders</td>
                            <td><FaCheck className="text-success" /></td>
                            <td><FaCheck className="text-success" /></td>
                        </tr>
                        <tr>
                            <th>Bulk Import / Export</th>
                            <td><FaTimes className="text-danger" /></td>
                            <td><FaCheck className="text-success" /></td>
                        </tr>
                        <tr>
                            <td>Folder Structure</td>
                            <td><FaTimes className="text-danger" /></td>
                            <td><FaCheck className="text-success" /></td>
                        </tr>
                        {/* <tr>
                            <td></td>
                            <td><button className="btn btn-outline-secondary btn-sm">Get Started</button></td>
                            <td><button className="btn btn-primary btn-sm">Upgrade</button></td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default ComparisonTable;
