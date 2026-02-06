import { PageLayout } from '../../components/layout/PageLayout.jsx'
import { Bell, Tag, Truck, Info, Clock, CheckCircle } from 'lucide-react'

export function Notifications() {
    const notifications = [
        {
            id: 1,
            title: 'Bid Outbid Alert',
            message: 'You have been outbid on "Classic Summer Cotton T-Shirt". Place a new bid now!',
            time: '2 mins ago',
            type: 'alert',
            icon: Bell,
            color: 'bg-red-50 text-red-500'
        },
        {
            id: 2,
            title: 'Auction Won!',
            message: 'Congratulations! You won the auction for "Wireless Earbuds Pro".',
            time: '1 hour ago',
            type: 'success',
            icon: CheckCircle,
            color: 'bg-green-50 text-green-500'
        },
        {
            id: 3,
            title: 'New Price Drop',
            message: 'The price for "Smart Watch Series 5" has dropped.',
            time: '3 hours ago',
            type: 'info',
            icon: Tag,
            color: 'bg-blue-50 text-blue-500'
        },
        {
            id: 4,
            title: 'Order Shipped',
            message: 'Your order #12345 has been shipped and is on its way.',
            time: 'Yesterday',
            type: 'shipping',
            icon: Truck,
            color: 'bg-amber-50 text-amber-500'
        }
    ]

    return (
        <PageLayout title="Notifications">
            <div className="space-y-4">
                {notifications.map((notif) => (
                    <div key={notif.id} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
                        <div className={`p-3 h-fit rounded-[18px] ${notif.color}`}>
                            <notif.icon size={20} />
                        </div>
                        <div className="flex-1 space-y-1">
                            <div className="flex justify-between items-start">
                                <h3 className="text-sm font-bold text-slate-900">{notif.title}</h3>
                                <span className="text-[10px] text-slate-400 font-medium">{notif.time}</span>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                {notif.message}
                            </p>
                        </div>
                        {/* Unread indicator dot */}
                        {notif.id === 1 && <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></div>}
                    </div>
                ))}
                <div className="text-center pt-4">
                    <button className="text-xs font-semibold text-[#007bff]">Mark all as read</button>
                </div>
            </div>
        </PageLayout>
    )
}
