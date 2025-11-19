
export default function Status({status} : { status: string }) {
    const background = status === 'new' ? 'bg-emerald-500' : status === 'user_answering' ? 'bg-indigo-500' : status === 'waiting' ? 'bg-orange-500' : status === 'answered' ? 'bg-sky-500' : 'bg-red-500'
    return (
        <span className={`w-20 h-5 rounded-full text-white text-[10px] flex justify-center items-center ${background}`}>
            { status === 'new' ? 'جدید' : status === 'user_answering' ? 'پاسخ مشتری' : status === 'waiting' ? 'در حال بررسی' : status === 'answered'? 'پاسخ داده شده' : 'بسته شده' }
        </span>
    )
}