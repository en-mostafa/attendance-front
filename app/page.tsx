import { BiReceipt, BiTransferAlt, BiSolidArrowFromBottom, BiChevronLeft, BiUser, BiRightArrowAlt, BiBell, BiMessageAdd, BiHomeAlt2, BiMenu, BiWallet, BiAlarmOff, BiPowerOff, BiAlarm, BiCalendar, BiAlarmExclamation } from "react-icons/bi";
import Link from "next/link";
import { Header } from "@/components";
import NotificationBell from "@/components/shared/NotificationBell";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
    return (
        <>
            <div>
                <div className="flex items-center justify-between p-4 fixed top-0 left-0 right-0 w-full z-[20] maxWidth mx-auto">
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
                        <h3>پروفایل</h3>
                        <BiChevronLeft className="text-xl" />
                    </Link>
                </div>
            </div>

            <main className="px-4 pt-20">
                <div className="flex flex-col">
                    <span>چهارشنبه 10 آبان ماه</span>
                    <span>2025/01/10</span>
                    <div>
                        <span>ساعت کاری  : </span>
                        <span>09:00 -- 17:00</span>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-5">
                    <div className="flex items-center rounded-full justify-center border border-destructive w-32 mx-auto h-32">
                        <div className="bg-destructive text-white w-20 h-20  flex items-center justify-center rounded-full">
                            <BiPowerOff className="text-2xl" />
                        </div>
                    </div>
                    <h2 className="text-destructive mt-2">پایان شیفت</h2>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-5">
                    <div className="bg-card rounded-xl border p-5">
                        <div className="bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-lg">
                            <BiAlarm className="text-2xl text-white" />
                        </div>
                        <span className="block mt-4">کل ساعات کاری</span>
                        <h3 className="block">4</h3>
                    </div>
                    <div className="bg-card rounded-xl border p-5">
                        <div className="bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-lg">
                            <BiCalendar className="text-2xl text-white" />
                        </div>
                        <div className="mt-4">مرخصی استحقاقی</div>
                        <h3 className="block">2 روز</h3>
                    </div>
                    <div className="bg-card rounded-xl border p-5">
                        <div className="bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-lg">
                            <BiAlarmOff className="text-2xl text-white" />
                        </div>
                        <span className="block mt-4">مدت زمان غیبت</span>
                        <h3 className="block">4 روز</h3>
                    </div>
                    <div className="bg-card rounded-xl border p-5">
                        <div className="bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-lg">
                            <BiAlarmExclamation className="text-2xl text-white" />
                        </div>
                        <span className="block mt-4">کل ساعات تاخیر</span>
                        <h3 className="block">4</h3>
                    </div>
                </div>
                {/*<h2 className="mb-4 mt-24">سفارشات در انتظار تایید</h2>
                <ul className="rounded-md border bg-card border">
                    <li className="border-b">
                        <Link href={`/orders/`} className="flex justify-between items-center pt-4 pr-4 pl-2 pb-2">
                            <div className="w-30 truncate">
                                <span className="text-sm font-bold">کد سفارش :  </span>
                            </div>
                            <div className="flex items-center">
                                status
                                <BiChevronLeft className="text-xl" />
                            </div>
                        </Link>
                        <div className="flex justify-between items-center text-xs my-3 px-4">
                            <span className="text-gray-500">نام گیرنده</span>
                            <span className="font-bold">fdgdfg</span>
                        </div>
                        <div className="flex justify-between items-center text-xs my-3 px-4">
                            <span className="text-gray-500">نام خانوادگی گیرنده</span>
                            <span className="font-bold">dfgdfg</span>
                        </div>
                        <div className="flex justify-between items-center text-xs my-3 px-4">
                            <span className="text-gray-500">شماره تماس گیرنده</span>
                            <span className="font-bold">dfgdfgdfg</span>
                        </div>
                        <div className="flex flex-col items-start text-xs my-3 px-4">
                            <span className="text-gray-500 mb-2">محصولات :</span>
                            <ul>
                                <li className="flex items-center gap-x-2 flex-wrap">
                                    title
                                    <span>-</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>*/}
            </main>

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