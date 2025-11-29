import { BoxNoData } from "@/components";
import { CalenderMonth } from "@/components/pages/notification/date-picker-month";
import { DialogDetail } from "@/components/pages/notification/dialog-detail";
import { notification } from "@/services/notification.serives";
import { Notification } from "@/types";
import Link from "next/link";
import {
    BiChevronRight,
    BiDownArrowAlt,
} from "react-icons/bi";

export default async function Page({
    searchParams
}: {
    searchParams: Promise<{ [date: string]: string }>
}) {
    const param = (await searchParams).date;
    const data = await notification();

    return (
        <div className="flex flex-col">
            <Link href={'/dashboard'} className="flex items-center gap-x-1 mb-4">
                <BiChevronRight className="text-2xl" />
                <h3>Notification</h3>
            </Link>
            <div className="bg-card p-3 rounded-lg">
                <CalenderMonth />
                <ul className="flex flex-col gap-y-1">
                    {data?.map((item: Notification) =>
                        <li key={item.id} className="bg-[#F6F6F6] p-2.5 rounded-md flex justify-between items-center">
                            <div className="w-14 h-14 flex flex-col rounded-md items-center justify-center text-background bg-green">
                                <BiDownArrowAlt className="text-white text-3xl rotate-45" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    <span>{item.title}</span>
                                </div>
                                <span className="text-secondary text-2xs mt-2">Deposit Date</span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    <span>{item.createAt}</span>
                                </div>
                                <span className="text-secondary text-2xs mt-2">Toman</span>
                            </div>
                            <DialogDetail item={item} />
                        </li>
                    )}
                </ul>
            </div>
            {/*{data.length === 0 && <BoxNoData />}*/}
        </div>
    )
}