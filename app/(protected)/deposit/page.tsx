import { DialogDetail } from "@/components/pages/deposit/dialog-detail";
import { CalenderMonth } from "@/components/shared/date-picker-month";
import { pipe } from "@/lib/decimal";
import { transaction } from "@/services/deposit.serives";
import { Transaction } from "@/types";
import Link from "next/link";
import {
    BiChevronLeft,
    BiDownArrowAlt,
} from "react-icons/bi";

export default async function Page({
    searchParams
}: {
    searchParams: Promise<{ [date: string]: string }>
}) {
    const param = (await searchParams).date;
    const data = await transaction(param);

    return (
        <div className="flex flex-col">
            <Link href={'/link'} className="flex items-center gap-x-1 mb-4">
                <BiChevronLeft className="text-2xl" />
                <h3>Deposit</h3>
            </Link>
            <div className="bg-card p-3 rounded-lg">
                <CalenderMonth />
                <ul className="flex flex-col gap-y-1">
                    {data?.map((item: Transaction) =>
                        <li key={item.id} className="bg-[#F6F6F6] p-2.5 rounded-md flex justify-between items-center">
                            <div className="w-14 h-14 flex flex-col rounded-md items-center justify-center text-background bg-green">
                                <BiDownArrowAlt className="text-white text-3xl rotate-45" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    <span>{item.date}</span>
                                </div>
                                <span className="text-secondary text-2xs mt-2">Deposit Date</span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    <span>{pipe(item.amount, 0)}</span>
                                </div>
                                <span className="text-secondary text-2xs mt-2">Toman</span>
                            </div>
                            <DialogDetail item={item} />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}