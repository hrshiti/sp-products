import { PageLayout } from '../../components/layout/PageLayout.jsx'

export function Terms() {
    return (
        <PageLayout title="Terms & Conditions">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 prose prose-sm max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-500">
                <h4>1. Introduction</h4>
                <p>
                    Welcome to Sp Product. By accessing or using our platform, you agree to be bound by these terms and conditions.
                </p>

                <h4>2. Bidding Rules</h4>
                <p>
                    All bids placed on the platform are binding. You must pay for any item you win within 24 hours of the auction ending.
                    We reserve the right to ban users who fail to complete payments.
                </p>

                <h4>3. User Conduct</h4>
                <p>
                    You agree not to use the platform for any illegal or unauthorized purpose. You must not harass, abuse, or harm another person.
                </p>

                <h4>4. Payments & Refunds</h4>
                <p>
                    Payments are processed securely. Refunds are only issued in cases where the item received is significantly different from the description.
                </p>

                <h4>5. Account Termination</h4>
                <p>
                    We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever.
                </p>

                <p className="text-[10px] text-slate-400 mt-8 pt-4 border-t border-slate-100">
                    Last updated: February 06, 2026
                </p>
            </div>
        </PageLayout>
    )
}
