import { useState } from 'react'
import { PageLayout } from '../../components/layout/PageLayout.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import { Camera, Mail, Phone, User as UserIcon, MapPin } from 'lucide-react'

export function EditProfile() {
    const { user } = useAuth()
    const [formData, setFormData] = useState({
        name: 'Vikram Singh',
        email: user?.identifier || 'vikram@example.com',
        phone: '+91 98765 43210',
        address: '123, Tech Park, Bangalore, India'
    })

    // Mock save
    const handleSave = () => {
        // Save logic
        alert('Profile updated!')
    }

    return (
        <PageLayout title="Edit Profile">
            <div className="space-y-6">
                {/* Avatar */}
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="h-28 w-28 rounded-full bg-slate-200 border-4 border-white shadow-lg overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop" alt="User" className="h-full w-full object-cover" />
                        </div>
                        <button className="absolute bottom-0 right-0 p-2 bg-[#007bff] text-white rounded-full shadow-md border-2 border-white active:scale-90 transition-transform">
                            <Camera size={18} />
                        </button>
                    </div>
                </div>

                {/* Form */}
                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Full Name</label>
                        <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-2xl border border-slate-200 focus-within:border-[#007bff] focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-sm">
                            <UserIcon size={18} className="text-slate-400" />
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="flex-1 bg-transparent text-sm font-medium outline-none text-slate-700 font-semibold"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Email Address</label>
                        <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-2xl border border-slate-200 focus-within:border-[#007bff] focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-sm">
                            <Mail size={18} className="text-slate-400" />
                            <input
                                type="email"
                                value={formData.email}
                                readOnly
                                className="flex-1 bg-transparent text-sm font-medium outline-none text-slate-500 cursor-not-allowed"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Phone Number</label>
                        <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-2xl border border-slate-200 focus-within:border-[#007bff] focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-sm">
                            <Phone size={18} className="text-slate-400" />
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="flex-1 bg-transparent text-sm font-medium outline-none text-slate-700 font-semibold"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Address</label>
                        <div className="flex items-start gap-3 px-4 py-3 bg-white rounded-2xl border border-slate-200 focus-within:border-[#007bff] focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-sm">
                            <MapPin size={18} className="text-slate-400 mt-0.5" />
                            <textarea
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                className="flex-1 bg-transparent text-sm font-medium outline-none text-slate-700 font-semibold resize-none h-20"
                            />
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleSave}
                    className="w-full py-4 rounded-2xl bg-[#007bff] text-white font-bold shadow-lg shadow-blue-500/30 active:scale-95 transition-all text-sm"
                >
                    Save Changes
                </button>
            </div>
        </PageLayout>
    )
}
