export default function StatusController ({ status } : { status: string }) {
    return (
        <span className={`w-20 h-5 rounded-full text-white text-[10px] flex justify-center items-center ${status === 'waiting' ? 'bg-orange-500' : status === 'preparing' ? 'bg-zinc-500' : status === 'sending' ? "bg-sky-500" : status === 'delivered' ? 'bg-emerald-500' : status === 'waiting_delivery' ? 'bg-orange-500' : 'bg-red-500' } bg-emerald-500`}>
            {status === 'waiting_delivery' ? 'در انتطار تایید' : status === 'sending' ? 'دریافت مرسوله' : status === 'delivered' ? 'تحویل داده شده' : 'عودت داده شده'}
        </span>
    )
}