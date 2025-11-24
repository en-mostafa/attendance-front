'use client'
import { Button } from "@/components"
import WalletChart from "@/components/pages/wallet/pipe-chart"
import Link from "next/link"
import { BiAlarmOff, BiArchiveIn, BiBell, BiChevronLeft, BiDownArrowAlt, BiDownload, BiFilterAlt, BiHomeAlt2, BiPlus, BiReceipt, BiSolidArrowFromBottom, BiUser, BiWallet } from "react-icons/bi"

export default function Page() {
    return (
        <>
            <div className="px-4 pb-24">

                <div className="flex items-center justify-between mt-4">
                    <Button buttonClass="flex !text-xs">
                        <BiPlus className="text-base" />
                    </Button>
                    <h2>مرخصی ها</h2>

                    <BiChevronLeft className="text-xl" />

                </div>
                <div className="bg-card border px-3 rounded-lg mt-1">
                    <div className="pt-3 pb-2 border-b">
                        <div className="flex justify-between items-center pb-2">
                            <span>1404/10/10</span>
                            <small className="border border-green text-green px-2.5 rounded-md text-xs py-px">تایید شده</small>
                        </div>
                        <div className="flex justify-between items-center py-px">
                            <span className="text-muted-foreground">تاریخ شروع</span>
                            <span className="">1404/10/10</span>
                        </div>
                        <div className="flex justify-between items-center py-px">
                            <span className="text-muted-foreground">تاریخ پایان</span>
                            <span className="">1404/10/10</span>
                        </div>
                        <div className="flex justify-between items-center py-px">
                            <span className="text-muted-foreground">مدت زمان</span>
                            <span className="">روزانه</span>
                        </div>
                        <div className="flex justify-between items-center py-px">
                            <span className="text-muted-foreground">توضیحات</span>
                            <span className="">----</span>
                        </div>
                    </div>
                    <div className="pt-3 pb-2 border-b">
                        <div className="flex justify-between items-center pb-2">
                            <span>1404/10/10</span>
                            <small className="border border-green text-green px-2.5 rounded-md text-xs py-px">تایید شده</small>
                        </div>
                        <div className="flex justify-between items-center py-px">
                            <span className="text-muted-foreground">تاریخ شروع</span>
                            <span className="">1404/10/10</span>
                        </div>
                        <div className="flex justify-between items-center py-px">
                            <span className="text-muted-foreground">تاریخ پایان</span>
                            <span className="">1404/10/10</span>
                        </div>
                        <div className="flex justify-between items-center py-px">
                            <span className="text-muted-foreground">مدت زمان</span>
                            <span className="">روزانه</span>
                        </div>
                        <div className="flex justify-between items-center py-px">
                            <span className="text-muted-foreground">توضیحات</span>
                            <span className="">----</span>
                        </div>
                    </div>
                </div>
            </div>

            <footer className=" bottom-0 w-full  left-0 right-0 fixed  z-1000 mx-auto">
                <ul className="bg-card rounded-full h-20 mx-5 flex justify-between text-secondary-foreground items-center px-2">
                    <li>
                        <Link href="/orders" className={`flex flex-col items-center w-16 ${true ? 'active' : ''}`}>
                            <BiReceipt className="text-xl" />
                            <span className="mt-1">گزارشات</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ticket/add" className={`flex flex-col items-center w-16 ${false ? 'active' : ''}`}>
                            <BiAlarmOff className="text-xl" />
                            <span className="mt-1">مرخصی ها</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard" className={`rounded-full bg-zinc-900 flex justify-center items-center w-12 h-12 ${false ? 'active' : ''}`}>
                            <BiHomeAlt2 className="text-2xl text-white" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/notification" className={`flex flex-col items-center w-16 ${false ? 'active' : ''}`}>
                            <BiBell className="text-xl" />
                            <span className="mt-1">اعلانات</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/notification" className={`flex flex-col items-center w-16 ${false ? 'active' : ''}`}>
                            <BiWallet className="text-xl" />
                            <span className="mt-1">کیف پول</span>
                        </Link>
                        {/*<Navbar />*/}
                    </li>
                </ul>
            </footer>
        </>
    )
}