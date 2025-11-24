import { Calender } from "@/components/shared/calender";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight, BiSolidBellRing } from "react-icons/bi";
import SVG1 from '@/public/dashboard-1.svg'
import SVG2 from '@/public/dashboard-2.svg'
import SVG3 from '@/public/dashboard-3.svg'
import SVG4 from '@/public/dashboard-4.svg'
import SVG5 from '@/public/dashboard-5.svg'
import SVG6 from '@/public/dashboard-6.svg'

export default function Page() {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <Link href={'/link'} className="flex items-center gap-x-1">
                        <h3>DASHBOARD</h3>
                    </Link>
                    <button className="flex items-center gap-x-1 text-primary">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.25 4.5C4.33979 5.26858 3.68772 6.29828 3.38207 7.4497C3.07642 8.60113 3.13194 9.81866 3.54113 10.9375C3.95031 12.0563 4.6934 13.0224 5.66978 13.7049C6.64617 14.3875 7.8087 14.7535 9 14.7535C10.1913 14.7535 11.3538 14.3875 12.3302 13.7049C13.3066 13.0224 14.0497 12.0563 14.4589 10.9375C14.8681 9.81866 14.9236 8.60113 14.6179 7.4497C14.3123 6.29828 13.6602 5.26858 12.75 4.5M9 3V9" stroke="#CA282C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-medium text-xs pt-1">LOGOUT</span>
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4 p-3">
                    <Link href="/leave/add" className="bg-card flex flex-col items-center justify-center py-5 px-10 rounded-lg border-2">
                        <div className="w-16 h-16 rounded-[20px] bg-[#FFF2F2] flex items-center justify-center">
                            <Image
                                src={SVG6}
                                alt="svg"
                            />
                        </div>
                        <span className="text-center mt-2">درخواست مرخصی</span>
                    </Link>
                    <Link href="/leave/details" className="bg-card flex flex-col items-center justify-center py-5 px-10 rounded-lg border-2">
                        <div className="w-16 h-16 rounded-[20px] bg-[#FFF2F2] flex items-center justify-center">
                            <Image
                                src={SVG5}
                                alt="svg"
                            />
                        </div>
                        <span className="text-center mt-2">جزئیات مرخصی</span>
                    </Link>
                    <Link href="/wallet" className="bg-card flex flex-col items-center justify-center py-5 px-10 rounded-lg border-2">
                        <div className="w-16 h-16 rounded-[20px] bg-[#FFF2F2] flex items-center justify-center">
                            <BiSolidBellRing className="text-2xl text-destructive/50" />
                        </div>
                        <span className="text-center mt-2">اعلان ها</span>
                    </Link>
                    <Link href="/profile" className="bg-card flex flex-col items-center justify-center py-5 px-10 rounded-lg border-2">
                        <div className="w-16 h-16 rounded-[20px] bg-[#FFF2F2] flex items-center justify-center">
                            <Image
                                src={SVG4}
                                alt="svg"
                            />
                        </div>
                        <span className="text-center mt-2">پروفایل</span>
                    </Link>
                    <Link href="/deposit" className="bg-card flex flex-col items-center justify-center py-5 px-10 rounded-lg border-2">
                        <div className="w-16 h-16 rounded-[20px] bg-[#FFF2F2] flex items-center justify-center">
                            <Image
                                src={SVG2}
                                alt="svg"
                            />
                        </div>
                        <span className="text-center mt-2">واریزی ها</span>
                    </Link>
                    <Link href="/summary" className="bg-card flex flex-col items-center justify-center py-5 px-10 rounded-lg border-2">
                        <div className="w-16 h-16 rounded-[20px] bg-[#FFF2F2] flex items-center justify-center">
                            <Image
                                src={SVG3}
                                alt="svg"
                            />
                        </div>
                        <span className="text-center mt-2">ورود و خروج</span>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}