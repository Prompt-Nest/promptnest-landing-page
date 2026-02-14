import { FaShieldAlt } from 'react-icons/fa';

function PrivacyPolicy() {
    return (
        <section id="privacy" className="container mb-5">
            <div className="text-center mb-4">
                <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                        width: 56,
                        height: 56,
                        background: 'rgba(124, 58, 237, 0.1)',
                    }}
                >
                    <FaShieldAlt size={24} style={{ color: '#7c3aed' }} />
                </div>
                <h2 className="fw-bold">Privacy Policy</h2>
            </div>

            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <p className="text-muted mb-3">
                        PromptNest collects and stores your email address to manage your account and determine Pro subscription status.
                    </p>
                    <p className="text-muted mb-3">
                        We use Stripe to process payments. Stripe may collect payment-related information, but PromptNest does not store any credit card or billing details directly.
                    </p>
                    <p className="text-muted mb-3">
                        We do not sell, rent, or share your personal information with third parties. Data is only used to provide the features of the extension.
                    </p>
                    <p className="text-muted mb-3">
                        If you have any questions or wish to delete your account, contact: [your email]
                    </p>
                    <p className="text-muted mb-0">
                        This policy may be updated at any time. Continued use of the extension indicates acceptance of any changes.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default PrivacyPolicy;
