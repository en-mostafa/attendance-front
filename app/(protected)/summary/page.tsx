import { BoxNoData } from "@/components";
import { CalenderMonth } from "@/components/pages/summary/date-picker-month";
import { pipe } from "@/lib/decimal";
import { summary } from "@/services/attendance.serives";
import { SummaryLog } from "@/types";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export default async function Page({
    searchParams
}: {
    searchParams: Promise<{ [date: string]: string }>
}) {
    const param = (await searchParams).date;
    const data = await summary(param);

    return (
        <div className="flex flex-col">
            <Link href={'/dashboard'} className="flex items-center gap-x-1 mb-4">
                <BiChevronRight className="text-2xl" />
                <h3>Summary</h3>
            </Link>
            <div className="bg-card p-3 rounded-lg">
                <CalenderMonth />
                <ul className="flex flex-col gap-y-1">
                    {data?.map((item: SummaryLog) =>
                        <li key={item.id} className="bg-[#F6F6F6] p-2.5 rounded-md flex flex-col">
                            <div className="flex justify-between items-center border-b py-1">
                                <span className="text-secondary text-2xs">کل ساعت کاری</span>
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    <span>{item.totalHours}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-b py-1">
                                <span className="text-secondary text-2xs">کل ساعات اضافه کاری</span>
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    <span>{item.totalOvertime}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-b py-1">
                                <span className="text-secondary text-2xs">کل ساعات تاخیر</span>
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    <span>{item.totalAbsent}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-b py-1">
                                <span className="text-secondary text-2xs">تعداد روز های تعطیل رسمی</span>
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    <span>{item.totalHolidayWork ?? 0}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-b py-1">
                                <span className="text-secondary text-2xs">
                                    حقوق دریافتی
                                    (تومان)
                                </span>
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    {pipe(item.totalSalary, 0)}
                                </div>

                            </div>
                        </li>
                    )}
                </ul>
            </div>
            {data.length === 0 && <BoxNoData />}
        </div>
    )
}