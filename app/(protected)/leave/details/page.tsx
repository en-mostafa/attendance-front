import { BoxNoData } from "@/components";
import { CalenderMonth } from "@/components/shared/date-picker-month";
import { leaves } from "@/services/leave.services";
import { LeaveLog, LeaveStatus } from "@/types";
import Link from "next/link";
import {
    BiCheckDouble,
    BiChevronRight,
    BiRotateRight,
    BiXCircle
} from "react-icons/bi";

export default async function Page({
    searchParams
}: {
    searchParams: Promise<{ [date: string]: string }>
}) {
    const param = (await searchParams).date;
    const data = await leaves(param);

    return (
        <div className="flex flex-col">
            <Link href={'/dashboard'} className="flex items-center gap-x-1 mb-4">
                <BiChevronRight className="text-2xl" />
                <h3>Leave Details</h3>
            </Link>
            <div className="bg-card p-3 rounded-lg">
                <CalenderMonth />
                <ul className="flex flex-col gap-y-1">
                    {data?.map((item: LeaveLog) => {
                        const statusColor = item.status === LeaveStatus.PENDING
                            ? "bg-orange"
                            : item.status === LeaveStatus.REJECTED
                                ? "bg-primary" : "bg-green"
                        return (
                            <li key={item.id} className="bg-[#F6F6F6] p-2.5 rounded-md flex justify-between items-center">
                                <div
                                    className={`w-14 h-14 flex flex-col rounded-md items-center justify-center text-background ${statusColor}`}>

                                    {item.status === LeaveStatus.PENDING
                                        ? <BiRotateRight className="text-3xl" />
                                        : item.status === LeaveStatus.REJECTED
                                            ? <BiXCircle className="text-3xl" />
                                            : <BiCheckDouble className="text-3xl" />
                                    }
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="flex items-center gap-x-1 text-xs mt-2">
                                        <span>{item.startDate}</span>
                                    </div>
                                    <span className="text-secondary text-2xs">From Date</span>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="flex items-center gap-x-1 text-xs mt-2">
                                        <span>{item.endDate}</span>
                                    </div>
                                    <span className="text-secondary text-2xs">To Date</span>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="flex items-center gap-x-1 text-xs mt-2">
                                        <span>{item.duration}</span>
                                    </div>
                                    <span className="text-secondary text-2xs">
                                        {item.type === 'DAILY' ? "Day" : 'hour'}
                                    </span>
                                </div>
                            </li>
                        )
                    }
                    )}
                </ul>
            </div>
            {data.length === 0 && <BoxNoData />}
        </div>
    )
}