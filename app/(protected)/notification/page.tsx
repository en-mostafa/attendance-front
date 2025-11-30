import { BoxNoData } from "@/components";
import { DialogDetail } from "@/components/pages/notification/dialog-detail";
import { jalaliTime } from "@/lib/jalali-date";
import { notification } from "@/services/notification.serives";
import { Notification } from "@/types";
import Link from "next/link";
import {
    BiCheck,
    BiCheckDouble,
    BiChevronRight,
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
                {/*<CalenderMonth />*/}
                <ul className="flex flex-col gap-y-1">
                    {data?.map((item: Notification) =>
                        <li key={item.id} className="bg-[#F6F6F6] p-2.5 rounded-md flex justify-between items-center">
                            <div className="flex items-center gap-x-2">
                                {!item.read ? (
                                    <BiCheck className="text-3xl text-green" />
                                ) : (
                                    <BiCheckDouble className="text-3xl text-primary" />
                                )}
                                <div className="flex flex-col items-start">
                                    <div className="flex items-center gap-x-1 text-xs mt-2">
                                        <span className="block truncate w-40">{item.title}</span>
                                    </div>
                                    <span className="text-secondary text-2xs mt-2">{jalaliTime(item.createAt)}</span>
                                </div>
                            </div>
                            <DialogDetail item={item} />
                        </li>
                    )}
                </ul>
            </div>
            {data?.length === 0 && <BoxNoData />}
        </div>
    )
}