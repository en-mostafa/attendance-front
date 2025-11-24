import { Calender } from "@/components/shared/calender";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Page() {
    return (
        <>
            <div className="flex flex-col">
                <Link href={'/link'} className="flex items-center gap-x-1 mb-4">
                    {/*<BiChevronLeft className="text-2xl" />*/}
                    <h3>HISTORY</h3>
                </Link>
                <div className="bg-card p-3 rounded-lg">
                    <Calender />
                    <ul className="flex flex-col gap-y-1">
                        <li className="bg-[#F6F6F6] p-2.5 rounded-md flex justify-between items-center">
                            <div className="w-14 h-14 flex flex-col rounded-md items-center justify-center text-background bg-green">
                                <span>03</span>
                                <span>09</span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    <span>08:00</span>
                                </div>
                                <span className="text-secondary text-2xs">Punch in</span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    <span>08:00</span>
                                </div>
                                <span className="text-secondary text-2xs">punch Out</span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    <span>08:00</span>
                                </div>
                                <span className="text-secondary text-2xs">Total hours</span>
                            </div>
                        </li>
                        <li className="bg-[#F6F6F6] p-2.5 rounded-md flex justify-between items-center">
                            <div className="w-14 h-14 flex flex-col rounded-md items-center justify-center text-background bg-orange">
                                <span>03</span>
                                <span>09</span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    <span>08:00</span>
                                </div>
                                <span className="text-secondary text-2xs">Total hours</span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    <span>08:00</span>
                                </div>
                                <span className="text-secondary text-2xs">Total hours</span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    <span>08:00</span>
                                </div>
                                <span className="text-secondary text-2xs">Total hours</span>
                            </div>
                        </li>
                        <li className="bg-[#F6F6F6] p-2.5 rounded-md flex justify-between items-center">
                            <div className="w-14 h-14 flex flex-col rounded-md items-center justify-center text-background bg-primary ">
                                <span>03</span>
                                <span>09</span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    <span>08:00</span>
                                </div>
                                <span className="text-secondary text-2xs">Total hours</span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    <span>08:00</span>
                                </div>
                                <span className="text-secondary text-2xs">Total hours</span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center gap-x-1 text-xs mt-2">
                                    <span>08:00</span>
                                </div>
                                <span className="text-secondary text-2xs">Total hours</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}