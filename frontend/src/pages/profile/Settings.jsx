import { useState } from 'react'
import { PageLayout } from '../../components/layout/PageLayout.jsx'
import { Bell, Lock, Moon, Globe, ChevronRight } from 'lucide-react'

export function Settings() {
    const [notifications, setNotifications] = useState(true)
    const [darkMode, setDarkMode] = useState(false)

    return (
        <PageLayout title="Settings">
            <div className="space-y-6">
                {/* Section 1 */}
                <div className="space-y-2">
                    <h3 className="uppercase text-xs font-bold text-slate-500 tracking-wider ml-2">Preferences</h3>
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden divide-y divide-slate-50">
                        <SettingToggle
                            icon={Bell}
                            label="Push Notifications"
                            active={notifications}
                            onToggle={() => setNotifications(!notifications)}
                        />
                        <SettingToggle
                            icon={Moon}
                            label="Dark Mode"
                            active={darkMode}
                            onToggle={() => setDarkMode(!darkMode)}
                        />
                        <SettingLink icon={Globe} label="Language" value="English" />
                    </div>
                </div>

                {/* Section 2 */}
                <div className="space-y-2">
                    <h3 className="uppercase text-xs font-bold text-slate-500 tracking-wider ml-2">Security</h3>
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden divide-y divide-slate-50">
                        <SettingLink icon={Lock} label="Change Password" />
                        <SettingLink icon={Lock} label="Two-Factor Authentication" value="Off" />
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

function SettingToggle({ icon: Icon, label, active, onToggle }) {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-slate-600">
                    <Icon size={18} />
                </div>
                <span className="text-sm font-semibold text-slate-800">{label}</span>
            </div>
            <button
                onClick={onToggle}
                className={`w-11 h-6 rounded-full relative transition-colors ${active ? 'bg-[#007bff]' : 'bg-slate-200'}`}
            >
                <div className={`absolute top-1 left-1 bg-white h-4 w-4 rounded-full transition-transform ${active ? 'translate-x-5' : ''}`} />
            </button>
        </div>
    )
}

function SettingLink({ icon: Icon, label, value }) {
    return (
        <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-slate-600">
                    <Icon size={18} />
                </div>
                <span className="text-sm font-semibold text-slate-800">{label}</span>
            </div>
            <div className="flex items-center gap-2">
                {value && <span className="text-xs font-medium text-slate-500">{value}</span>}
                <ChevronRight size={16} className="text-slate-300" />
            </div>
        </button>
    )
}
