import { PageLayout } from '../../components/layout/PageLayout.jsx'
import { Shield, Eye, Lock, FileKey } from 'lucide-react'

export function Privacy() {
    return (
        <PageLayout title="Privacy & Security">
            <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-2xl flex gap-4 items-start border border-blue-100">
                    <Shield className="text-blue-600 shrink-0 mt-1" size={24} />
                    <div>
                        <h3 className="text-sm font-bold text-blue-900">Your Data is Protected</h3>
                        <p className="text-xs text-blue-700 mt-1 leading-relaxed">
                            We use industry-standard encryption to protect your personal information and payment details.
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    <PrivacySection
                        icon={Eye}
                        title="Data Visibility"
                        description="Control who can see your profile and bidding history."
                    />
                    <PrivacySection
                        icon={Lock}
                        title="Account Security"
                        description="Manage your password and login verification methods."
                    />
                    <PrivacySection
                        icon={FileKey}
                        title="Data Permissions"
                        description="Manage app permissions for camera, location, and notifications."
                    />
                </div>
            </div>
        </PageLayout>
    )
}

function PrivacySection({ icon: Icon, title, description }) {
    return (
        <button className="w-full text-left p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-[#007bff]/30 transition-all flex gap-4 items-center">
            <div className="p-3 bg-slate-50 rounded-xl text-slate-600">
                <Icon size={20} />
            </div>
            <div>
                <h4 className="text-sm font-bold text-slate-900">{title}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{description}</p>
            </div>
        </button>
    )
}
