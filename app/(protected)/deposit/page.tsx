'use client'
import { CalenderMonth } from "@/components/shared/date-picker-month";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { useState } from "react";
import { BiCheckDouble, BiChevronLeft, BiDownArrowAlt, BiRevision, BiRotateRight, BiSync, BiXCircle } from "react-icons/bi";

export default function Page() {
    const [value, setValue] = useState<any>(new Date())

    return (
        <div className="flex flex-col">
            <Link href={'/link'} className="flex items-center gap-x-1 mb-4">
                <BiChevronLeft className="text-2xl" />
                <h3>Deposit</h3>
            </Link>
            <div className="bg-card p-3 rounded-lg">
                <CalenderMonth
                    value={value}
                    setValue={setValue}
                />
                <ul className="flex flex-col gap-y-1">
                    <li className="bg-[#F6F6F6] p-2.5 rounded-md flex justify-between items-center">
                        <div className="w-14 h-14 flex flex-col rounded-md items-center justify-center text-background bg-green">
                            <BiDownArrowAlt className="text-white text-3xl rotate-45" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex items-center gap-x-1 text-xs mt-2">
                                <span>1404/10/10</span>
                            </div>
                            <span className="text-secondary text-2xs">Deposit Date</span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex items-center gap-x-1 text-xs mt-2">
                                <span>20,000,000 </span>
                            </div>
                            <span className="text-secondary text-2xs">Toman</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}