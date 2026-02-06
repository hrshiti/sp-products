import { PageLayout } from '../../components/layout/PageLayout.jsx'
import { MessageCircle, Phone, Mail, ChevronDown } from 'lucide-react'

export function Support() {
    return (
        <PageLayout title="Help & Support">
            <div className="space-y-6">
                <div className="text-center space-y-2 py-4">
                    <h2 className="text-xl font-bold text-slate-900">How can we help you?</h2>
                    <p className="text-sm text-slate-500 max-w-xs mx-auto">
                        Our team is available 24/7 to assist you with any questions or issues.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <SupportOption icon={MessageCircle} label="Live Chat" sub="Wait time: ~2 min" color="bg-blue-50 text-blue-600" />
                    <SupportOption icon={Phone} label="Call Us" sub="+1 800 123 4567" color="bg-green-50 text-green-600" />
                    <SupportOption icon={Mail} label="Email Us" sub="support@sp.com" color="bg-purple-50 text-purple-600" />
                </div>

                <div className="space-y-3 pt-2">
                    <h3 className="text-sm font-bold text-slate-900 ml-1">Frequently Asked Questions</h3>
                    <Accordion title="How do I place a bid?" content="Navigate to a product page and click the 'Place Bid' button. Enter an amount higher than the current bid." />
                    <Accordion title="What happens if I win?" content="You will receive a notification and an email with instructions on how to complete the payment." />
                    <Accordion title="Can I cancel a bid?" content="Bids once placed cannot be cancelled. Please bid responsibly." />
                    <Accordion title="How do I withdraw funds?" content="Go to your Wallet section and request a withdrawal to your registered bank account." />
                </div>
            </div>
        </PageLayout>
    )
}

function SupportOption({ icon: Icon, label, sub, color }) {
    return (
        <button className={`p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-3 border border-transparent hover:border-slate-200 transition-all shadow-sm bg-white`}>
            <div className={`p-3 rounded-full ${color}`}>
                <Icon size={24} />
            </div>
            <div>
                <div className="text-sm font-bold text-slate-900">{label}</div>
                <div className="text-[10px] text-slate-500 font-medium">{sub}</div>
            </div>
        </button>
    )
}

function Accordion({ title, content }) {
    return (
        <details className="group bg-white rounded-xl border border-slate-100 open:border-slate-200 transition-colors shadow-sm">
            <summary className="flex items-center justify-between p-4 cursor-pointer list-none text-sm font-semibold text-slate-700">
                {title}
                <ChevronDown size={16} className="text-slate-400 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-4 pb-4 text-xs leading-relaxed text-slate-500 border-t border-slate-50 pt-3">
                {content}
            </div>
        </details>
    )
}
