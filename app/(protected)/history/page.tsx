import { BoxNoData } from "@/components";
import { Calender } from "@/components/shared/calender";
import Footer from "@/components/shared/Footer";
import { history } from "@/services/attendance.serives";
import { History } from "@/types";
import { splitDate } from "@/utilities/split-date";
import Link from "next/link";

export default async function Page({
    searchParams
}: {
    searchParams: Promise<{ [date: string]: string | string[] | undefined }>
}) {
    const param = (await searchParams).date;
    const data = await history(param);

    return (
        <>
            <div className="flex flex-col">
                <Link href={'/link'} className="flex items-center gap-x-1 mb-4">
                    <h3>HISTORY</h3>
                </Link>
                <div className="bg-card p-3 mb-24 rounded-lg">
                    <Calender />
                    <ul className="flex flex-col gap-y-1">
                        {
                            data.length === 0
                                ? <BoxNoData />
                                : data?.map((item: History) =>
                                    <li key={item.id} className="bg-[#F6F6F6] p-2.5 rounded-md flex justify-between items-center">
                                        <div className={`w-14 h-14 flex flex-col rounded-md items-center justify-center text-background ${item.checkOut ? 'bg-green' : 'bg-primary'}`}>
                                            <span>{splitDate(item.date).day}</span>
                                            <span>{splitDate(item.date).month}</span>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex items-center gap-x-1 text-xs mt-2">
                                                <span>{item.checkIn}</span>
                                            </div>
                                            <span className="text-secondary text-2xs">Punch in</span>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex items-center gap-x-1 text-xs mt-2">
                                                <span>{item.checkOut ?? '--:--'}</span>
                                            </div>
                                            <span className="text-secondary text-2xs">punch Out</span>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex items-center gap-x-1 text-xs mt-2">
                                                <span>{item.checkOut ? item.totalWorkedTime : '--:--'}</span>
                                            </div>
                                            <span className="text-secondary text-2xs">Total hours</span>
                                        </div>
                                    </li>
                                )}
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}