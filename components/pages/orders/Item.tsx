import { OrderProps } from "@/lib/types";
import StatusController from "@/components/shared/StatusController";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";


export default function Item({ item } : { item : OrderProps }) {
    return (
        <li className="border-b">
            <Link href={`/orders/${item.id}`} className="flex justify-between items-center pt-4 pr-4 pl-2 pb-2">
                <div className="w-30 truncate">
                    <span className="text-sm font-bold">کد سفارش : {item.id}</span>
                </div>
                <div className="flex items-center">
                    <StatusController status={item.status}/>
                    <BiChevronLeft className="text-xl"/>
                </div>
            </Link>
            <div className="flex justify-between items-center text-xs my-3 px-4">
                <span className="text-gray-500">نام گیرنده</span>
                <span className="font-bold">{item.user_name}</span>
            </div>
            <div className="flex justify-between items-center text-xs my-3 px-4">
                <span className="text-gray-500">نام خانوادگی گیرنده</span>
                <span className="font-bold">{item.user_last_name}</span>
            </div>
            <div className="flex justify-between items-center text-xs my-3 px-4">
                <span className="text-gray-500">شماره تماس گیرنده</span>
                <span className="font-bold">{item.user_phone_number}</span>
            </div>
            <div className="flex flex-col items-start text-xs my-3 px-4">
                <span className="text-gray-500 mb-2">محصولات :</span>
                <ul>
                    {
                        item.products.map(product => 
                            <li key={product.id} className="flex items-center gap-x-2 flex-wrap">
                                {product.title}
                                <span>-</span>
                            </li>
                        )
                    }
                </ul>
            </div>
        </li>
    )
}