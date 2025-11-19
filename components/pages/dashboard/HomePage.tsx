/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { UseGetData } from "@/lib/hooks/useGetData";
import { Loader } from "./../../index";
import { BiReceipt, BiTransferAlt, BiSolidArrowFromBottom  } from "react-icons/bi";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";
import { selectDataUser } from "@/lib/store/auth";
import { ImaskPipe } from "@/lib/services/ImaskPipe";
import Item from "../orders/Item";

export default function HomePage() {
    const profile = useAppSelector(selectDataUser);
    const { data, isLoading } = UseGetData('/delivery/transport/index?status=waiting_delivery');
    const isExisting = data?.length > 0;


    return (
        <main className="px-4">
            {/*box header*/}
            <div className="bg-zinc-900 rounded-xl p-4 shadow relative">
                <div className="flex flex-col gap-y-3 pb-10">
                    <div className="text-white flex items-center justify-between">
                        <span className="text-xs">سفارشات در حال ارسال</span>
                        <div className="font-bold flex items-center text-sm gap-x-3">
                            <span>{profile.sending_transport} سفارش</span>
                        </div>
                    </div>
                    <div className="text-white flex items-center justify-between">
                        <span className="text-xs">سفارشات تحویل داده شده</span>
                        <div className="font-bold flex items-center text-sm gap-x-3">
                            <span>{profile.delivered_transport} سفارش</span>
                        </div>
                    </div>
                    <div className="text-white flex items-center justify-between">
                        <span className="text-xs">موجودی کیف پول</span>
                        <div className="font-bold flex items-center text-sm gap-x-3">
                            <span>{ ImaskPipe(`${profile.wallet_balance}`) }</span>
                            <span className="text-xs font-normal">تومان</span>
                        </div>
                    </div>
                </div>
                <ul className="flex items-center h-auto p-2 bg-white absolute top-32 rounded-md border" style={{width: 'calc(100% - 30px)'}}>
                    <li className="w-1/3">
                        <Link href="/orders" className="button-copy flex flex-col text-center justify-center items-center">
                            <div className="text-lg flex items-center justify-center bg-zinc-900 text-white w-10 h-10 m-auto rounded-full border-4 border-gray-200">
                                <BiReceipt className="text-xl"/>
                            </div>
                            <span className="text-xs font-semibold mt-1">سفارشات</span>
                        </Link>
                    </li>
                    <li className="w-1/3">
                        <Link href="/transaction/list" className="flex flex-col text-center justify-center items-center">
                            <div className="text-lg flex items-center justify-center bg-zinc-900 text-white w-10 h-10 m-auto rounded-full border-4 border-gray-200">
                                <BiTransferAlt className="text-xl"/>
                            </div>
                            <span className="text-xs font-semibold mt-1">گزارش تسویه ها</span>
                        </Link>
                    </li>
                    <li className="w-1/3">
                        <Link href="/transaction" className="button-modal flex flex-col text-center justify-center items-center">
                            <div className="text-lg flex items-center justify-center bg-zinc-900 text-white w-10 h-10 m-auto rounded-full border-4 border-gray-200">
                                <BiSolidArrowFromBottom className="text-xl"/>
                            </div>
                            <span className="text-xs font-semibold mt-1">تسویه ریالی</span>
                        </Link>
                    </li>
                </ul>
            </div>
      
            {
                isExisting && (
                    <>
                        <h2 className="mb-4 mt-24">سفارشات در انتظار تایید</h2>
                        {isLoading ? <Loader /> : (
                            <ul className="rounded-md border">
                                {
                                    data.map((item : any) => 
                                        <Item key={item.id} item={item}/>
                                    )
                                }
                            </ul>
                        )}
                    </>
                )
            }
        </main>
    )
}