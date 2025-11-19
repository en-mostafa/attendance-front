import { ImaskPipe } from "@/lib/services/ImaskPipe";
import { TransactionProps } from "@/lib/types";

export default function Item({ item }: { item: TransactionProps }) {
    return (
        <li className="border-b">
            <div className="flex justify-between items-center text-xs my-3 px-4">
                <span className="text-gray-500">وضعیت </span>
                <span className={`w-20 h-5 rounded-full text-white text-[10px] flex justify-center items-center ${item.status === 'waiting' ? 'bg-orange-500' : item.status === 'accept' ? 'bg-emerald-500' : 'bg-red-500'}`}>
                    {item.status === 'waiting' ? 'در انتظار تایید' : item.status === 'accept' ? 'انجام شده' : 'رد شده'}
                </span>
            </div>
            <div className="flex justify-between items-center text-xs my-3 px-4">
                <span className="text-gray-500">مقدار درخواست</span>
                <span className="font-bold">{ImaskPipe(`${item.price}`)} <small className="font-normal text-xs mr-1">تومان</small></span>
            </div>
            <div className="flex justify-between items-center text-xs my-3 px-4">
                <span className="text-gray-500">نام بانک </span>
                <span>{item.shaba.name}</span>
            </div>
            <div className="flex justify-between items-center text-xs my-3 px-4">
                <span className="text-gray-500">شماره شبا</span>
                <span>IR - {item.shaba.shaba}</span>
            </div>
            <div className="flex justify-between items-center text-xs my-3 px-4">
                <span className="text-gray-500">تاریخ ثبت </span>
                <span>{item.jalali_create}</span>
            </div>
            {
                item.text_id !== undefined && (
                    <div className="flex justify-between items-center text-xs my-3 px-4">
                        <span className="text-gray-500">کد پیگیری</span>
                        <span>{item.text_id}</span>
                    </div>
                )
            }
            {
                item.description !== null && (
                    <div className="flex justify-between items-center gap-x-5 text-xs my-3 px-4">
                        <span className="text-gray-500 flex-shrink-0">دلیل رد درخواست</span>
                        <span className="text-end">{item.description}</span>
                    </div>
                )
            }
        </li>
    )
}