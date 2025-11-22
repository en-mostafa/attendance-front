'use client'
import WalletChart from "@/components/pages/wallet/pipe-chart"
import Link from "next/link"
import { BiAlarmOff, BiArchiveIn, BiBell, BiChevronLeft, BiDownArrowAlt, BiDownload, BiFilterAlt, BiHomeAlt2, BiReceipt, BiSolidArrowFromBottom, BiUser, BiWallet } from "react-icons/bi"

export default function Page() {
    return (
        <>
            <div className="px-4 pb-24">
                <div className="flex items-center justify-between p-4 w-full maxWidth mx-auto">
                    <div className="flex items-end gap-x-3">
                        <Link href="/profile">
                            <BiUser className="text-xl" />
                        </Link>
                        <div className="relative">
                            {
                                true && <span className="absolute top-0 left-0 w-2 h-2 bg-emerald-500 rounded-full"></span>
                            }
                            <Link href="/notification">
                                <BiBell className="text-xl" />
                            </Link>
                        </div>
                    </div>
                    <Link href={'/link'} className="flex items-center gap-x-1">
                        <h3>صفحه اصلی</h3>
                        <BiChevronLeft className="text-xl" />
                    </Link>
                </div>

                <div className="bg-card border p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                        <WalletChart />
                        <div className="flex flex-col w-full items-end">
                            <h2 className="font-semibold block">20,000,000 تومان</h2>
                            <span className="text-muted-foreground">پایه حقوق</span>
                        </div>
                    </div>
                    <ul className="flex flex-col gap-y-1">
                        <li className="flex justify-between items-center border-b py-1">
                            <span>5,000,000 تومان</span>
                            <span className="text-secondary-foreground">بستانکاری</span>
                        </li>
                        <li className="flex justify-between items-center border-b py-1">
                            <span>5,000,000 تومان</span>
                            <span className="text-secondary-foreground">جریمه</span>
                        </li>
                        <li className="flex justify-between items-center border-b py-1">
                            <span>5,000,000 تومان</span>
                            <span className="text-secondary-foreground">موجودی ماه جاری</span>
                        </li>
                    </ul>

                </div>

                <div className="flex items-center justify-between mt-4">
                    <span>گزارش واریزی</span>
                    <div className="border p-1 border-secondary-foreground rounded-sm">
                        <BiFilterAlt />
                    </div>
                </div>
                <div className="bg-card border flex items-center justify-between p-3 rounded-lg mt-1">
                    <div className="flex flex-col">
                        <span className="font-medium text-green">2,000,000 تومان</span>
                        <small className="text-secondary-foreground lock mt-1">1404/10/10 - 12:12</small>
                    </div>
                    <div className="bg-green w-9 h-9 mr-auto flex items-center justify-center rounded-full border-4 border-success/50">
                        <BiDownArrowAlt className="text-white text-xl rotate-45" />
                    </div>
                </div>
                <div className="bg-card border flex items-center justify-between p-3 rounded-lg mt-1">
                    <div className="flex flex-col">
                        <span className="font-medium text-green">2,000,000 تومان</span>
                        <small className="text-secondary-foreground lock mt-1">1404/10/10 - 12:12</small>
                    </div>
                    <div className="bg-green w-9 h-9 mr-auto flex items-center justify-center rounded-full border-4 border-success/50">
                        <BiDownArrowAlt className="text-white text-xl rotate-45" />
                    </div>
                </div>
                <div className="bg-card border flex items-center justify-between p-3 rounded-lg mt-1">
                    <div className="flex flex-col">
                        <span className="font-medium text-green">2,000,000 تومان</span>
                        <small className="text-secondary-foreground lock mt-1">1404/10/10 - 12:12</small>
                    </div>
                    <div className="bg-green w-9 h-9 mr-auto flex items-center justify-center rounded-full border-4 border-success/50">
                        <BiDownArrowAlt className="text-white text-xl rotate-45" />
                    </div>
                </div>
                <div className="bg-card border flex items-center justify-between p-3 rounded-lg mt-1">
                    <div className="flex flex-col">
                        <span className="font-medium text-green">2,000,000 تومان</span>
                        <small className="text-secondary-foreground lock mt-1">1404/10/10 - 12:12</small>
                    </div>
                    <div className="bg-green w-9 h-9 mr-auto flex items-center justify-center rounded-full border-4 border-success/50">
                        <BiDownArrowAlt className="text-white text-xl rotate-45" />
                    </div>
                </div>
                <div className="bg-card border flex items-center justify-between p-3 rounded-lg mt-1">
                    <div className="flex flex-col">
                        <span className="font-medium text-green">2,000,000 تومان</span>
                        <small className="text-secondary-foreground lock mt-1">1404/10/10 - 12:12</small>
                    </div>
                    <div className="bg-green w-9 h-9 mr-auto flex items-center justify-center rounded-full border-4 border-success/50">
                        <BiDownArrowAlt className="text-white text-xl rotate-45" />
                    </div>
                </div>
                <div className="bg-card border flex items-center justify-between p-3 rounded-lg mt-1">
                    <div className="flex flex-col">
                        <span className="font-medium text-green">2,000,000 تومان</span>
                        <small className="text-secondary-foreground lock mt-1">1404/10/10 - 12:12</small>
                    </div>
                    <div className="bg-green w-9 h-9 mr-auto flex items-center justify-center rounded-full border-4 border-success/50">
                        <BiDownArrowAlt className="text-white text-xl rotate-45" />
                    </div>
                </div>
                <div className="bg-card border flex items-center justify-between p-3 rounded-lg mt-1">
                    <div className="flex flex-col">
                        <span className="font-medium text-green">2,000,000 تومان</span>
                        <small className="text-secondary-foreground lock mt-1">1404/10/10 - 12:12</small>
                    </div>
                    <div className="bg-green w-9 h-9 mr-auto flex items-center justify-center rounded-full border-4 border-success/50">
                        <BiDownArrowAlt className="text-white text-xl rotate-45" />
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