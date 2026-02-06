import { PageLayout } from '../../components/layout/PageLayout.jsx'
import { Wallet as WalletIcon, Plus, ArrowUpRight, ArrowDownLeft, History } from 'lucide-react'
import { formatPrice } from '../../utils/formatPrice.js'

export function Wallet() {
    return (
        <PageLayout title="Wallet & Payments">

            {/* Wallet Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#007bff] to-indigo-600 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden mb-6">
                <div className="absolute top-0 right-0 p-3 opacity-10">
                    <WalletIcon size={120} />
                </div>
                <div className="relative z-10 space-y-6">
                    <div className="space-y-1">
                        <span className="text-sm font-medium text-blue-100 opacity-90">Total Balance</span>
                        <h2 className="text-4xl font-bold tracking-tight">{formatPrice(12500)}</h2>
                    </div>

                    <div className="flex gap-3">
                        <button className="flex-1 bg-white/20 backdrop-blur-md rounded-xl py-3 flex items-center justify-center gap-2 text-sm font-bold hover:bg-white/30 transition-colors">
                            <Plus size={16} /> Add Money
                        </button>
                        <button className="flex-1 bg-white text-[#007bff] rounded-xl py-3 flex items-center justify-center gap-2 text-sm font-bold shadow-lg active:scale-95 transition-all">
                            Withdraw
                        </button>
                    </div>
                </div>
            </div>

            {/* Transaction History */}
            <div className="space-y-4">
                <div className="flex items-center justify-between px-1">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <History size={16} className="text-slate-400" /> Recent Transactions
                    </h3>
                    <button className="text-xs font-semibold text-[#007bff]">See All</button>
                </div>

                <div className="space-y-3">
                    <TransactionItem
                        type="credit"
                        title="Added Money to Wallet"
                        date="Today, 10:30 AM"
                        amount={5000}
                    />
                    <TransactionItem
                        type="debit"
                        title="Paid for Order #9921"
                        date="Yesterday, 04:15 PM"
                        amount={2499}
                    />
                    <TransactionItem
                        type="debit"
                        title="Bid Deposit Refund"
                        date="04 Feb, 2026"
                        amount={500}
                        isRefund
                    />
                </div>
            </div>

        </PageLayout>
    )
}

function TransactionItem({ type, title, date, amount, isRefund }) {
    const isCredit = type === 'credit' || isRefund
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors shadow-sm">
            <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${isCredit ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {isCredit ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                </div>
                <div className="space-y-0.5">
                    <p className="text-sm font-bold text-slate-900">{title}</p>
                    <p className="text-[11px] text-slate-400 font-medium">{date}</p>
                </div>
            </div>
            <div className={`text-sm font-bold ${isCredit ? 'text-green-600' : 'text-slate-900'}`}>
                {isCredit ? '+' : '-'}{formatPrice(amount)}
            </div>
        </div>
    )
}
