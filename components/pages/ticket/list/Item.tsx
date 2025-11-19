import { TicketProps } from "@/lib/types";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";
import Status from "./Status";
import Department from "./Department";

export default function Item({ item }: { item: TicketProps }) {
    return (
        <li className="border-b">
            <Link href={`/ticket/list/${item.id}`} className="flex justify-between items-center pt-4 pr-4 pl-2 pb-2">
                <div className="text-xs font-semibold w-30 truncate">
                    <span>{item.title}</span>
                </div>
                <div className="flex items-center">
                    <Status status={item.status}/>
                    <BiChevronLeft className="text-xl" />
                </div>
            </Link>
            <div className="flex justify-between items-center text-xs my-3 px-4">
                <span className="text-gray-500">شناسه </span>
                <span className="font-bold">{item.id}</span>
            </div>
            <div className="flex justify-between items-center text-xs my-3 px-4">
                <span className="text-gray-500">دپارتمان</span>
                <Department title={item.department}/>
            </div>
            <div className="flex justify-between items-center text-xs my-3 px-4">
                <span className="text-gray-500">تاریخ ثبت </span>
                <span className="font-bold">{item.jalali_create}</span>
            </div>
        </li>
    )
}