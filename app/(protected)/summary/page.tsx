'use client'
import { CalenderMonth } from "@/components/shared/date-picker-month";
import Link from "next/link";
import { useState } from "react";
import { BiChevronLeft, BiDownArrowAlt } from "react-icons/bi";

export default function Page() {
    const [value, setValue] = useState<any>(new Date())

    return (
        <div className="flex flex-col">
            <Link href={'/link'} className="flex items-center gap-x-1 mb-4">
                <BiChevronLeft className="text-2xl" />
                <h3>Summary</h3>
            </Link>
            <div className="bg-card p-3 rounded-lg">
                <CalenderMonth
                    value={value}
                    setValue={setValue}
                />
                <ul className="flex flex-col gap-y-1">
                    <li className="bg-[#F6F6F6] p-2.5 rounded-md flex flex-col">
                        <div className="flex justify-between items-center border-b py-1">
                            <div className="flex items-center gap-x-1 text-xs mt-2">
                                <span>30</span>
                            </div>
                            <span className="text-secondary text-2xs">کل ساعت کاری</span>
                        </div>
                        <div className="flex justify-between items-center border-b py-1">
                            <div className="flex items-center gap-x-1 text-xs mt-2">
                                <span>30</span>
                            </div>
                            <span className="text-secondary text-2xs">کل ساعات اضافه کاری</span>
                        </div>
                        <div className="flex justify-between items-center border-b py-1">
                            <div className="flex items-center gap-x-1 text-xs mt-2">
                                <span>30</span>
                            </div>
                            <span className="text-secondary text-2xs">کل ساعات تاخیر</span>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    )
}