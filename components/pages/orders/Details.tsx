/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import StatusController from "@/components/shared/StatusController";
import { LatLngUserProps, OrdersPeyck } from "@/lib/types";
import { BiSolidDownvote } from "react-icons/bi";
import dynamic from 'next/dynamic';
import { useState } from "react";
import DeliveredModal from "./modals/DeliveredModal";
import callApi from "@/app/api/callApi";
import { ToastError, ToastStartLoading, ToastStopLoading, ToastSuccess } from "@/lib/services/ToastController";
import NotDeliveredModal from "./modals/NotDeliveredModal";
const Map = dynamic(() => import('../map/Map'), {ssr: false});

export default function Details({ data, mutate } : { data: OrdersPeyck, mutate: any }) {
    const [status, setStatus] = useState(data.status);
    const [showMap, setShowMap] = useState<boolean>(false);
    const [location, setLocation] = useState<LatLngUserProps>({ lat:data.lat, lng: data.lng });
    const disabledBtn = status === 'waiting_delivery' || status === 'delivered' || status === 'not_delivered'
    const [openModalDelivered, setOpenModalDelivered] = useState(false);
    const [openModalNotDelivered, setOpenModalNotDelivered] = useState(false);

    const handleClick = (type: string) => {
        setStatus(type);
        if(type === 'delivered') {
            setOpenModalDelivered(true)
        }
        if(type === 'not_delivered') {
            setOpenModalNotDelivered(true)
        }
        if(type === 'sending') {
            handleSendingOrder()
        }
    }

    const handleSendingOrder = async () => {
        try {
            ToastStartLoading()
            const res = await callApi().post(`/delivery/transport/update?id=${data.id}&status=sending`)
            if(res.status === 200) {
                ToastSuccess()
                ToastStopLoading()
                mutate()
            }
        } catch (error) {
            ToastError('با خطا مواجه شد !')
            console.log(error)
            ToastStopLoading()
        }
    }


    return (
        <>
            <ul className="mx-4 border px-3 shadow-md rounded-md">
                <li className="flex justify-between items-center border-b py-2.5">
                    <span className="text-slate-500">کد سفارش</span>
                    <span>{data.id}</span>
                </li>
                <li className="flex justify-between items-center border-b py-2.5">
                    <span className="text-slate-500">وضعیت</span>
                    <StatusController status={data.status}/>
                </li>
                <li className="flex justify-between items-center border-b py-2.5">
                    <span className="text-slate-500">نام </span>
                    <span>{data.user_name}</span>
                </li>
                <li className="flex justify-between items-center border-b py-2.5">
                    <span className="text-slate-500">نام خانوادگی</span>
                    <span>{data.user_last_name}</span>
                </li>
                <li className="flex justify-between items-center border-b py-2.5">
                    <span className="text-slate-500">شماره تماس</span>
                    <span>{data.user_phone_number}</span>
                </li>
                <li className="flex justify-between items-center border-b py-2.5">
                    <span className="text-slate-500">استان</span>
                    <span>{data.province}</span>
                </li>
                <li className="flex justify-between items-center border-b py-2.5">
                    <span className="text-slate-500">شهر</span>
                    <span>{data.city}</span>
                </li>
                <li className="flex justify-between items-center border-b py-2.5">
                    <span className="text-slate-500">آدرس</span>
                    <span>{data.address}</span>
                </li>
                <li className="flex justify-between items-center border-b py-2.5">
                    <span className="text-slate-500">کد پستی</span>
                    <span>{data.post_code}</span>
                </li>
                <li className="flex justify-between items-center py-2.5">
                    <span className="text-slate-500">آدرس (مکان نما)</span>
                    <span className="text-sky-500" onClick={() => setShowMap(!showMap)}>مشاهده</span>
                </li>
                { showMap &&  <Map location={location} setLocation={setLocation}/>}
            </ul>
            <div className="flex items-center flex-col mt-4 mb-3">
                <h2 className="text-sm">مراحل تحویل مرسوله</h2>
                <small className="text-xs text-slate-500 mt-2">(برای تغییر وضعیت بروی کادر مورد نظر کلیک کنید)</small>
            </div>
            <div className="flex flex-col items-center gap-x-2">
                <button type="button" className="border border-orange-500 rounded-md shadow-md h-8 text-center w-52 mx-auto bg-orange-500 text-white">در انتظار تایید</button>
                <BiSolidDownvote className="text-xl my-2"/>
                <button type="button" className={`border rounded-md shadow-md h-8 text-center w-52 mx-auto bg-zinc-100 ${ status !== 'waiting_delivery' && 'border-sky-500 !text-white !bg-sky-500' }`} disabled={status !== 'waiting_delivery'} onClick={() => handleClick('sending')}>دریافت مرسوله</button>
                <BiSolidDownvote className="text-xl my-2"/>
                <div className="flex items-center gap-x-2">
                    <button type="button" className={`border rounded-md shadow-md h-8 text-center w-32 mx-auto bg-zinc-100 ${ status === 'delivered' && 'border-emerald-500 !text-white !bg-emerald-500' }`} disabled={disabledBtn} onClick={() => handleClick('delivered')}>تحویل به مشتری</button>
                    <button type="button" className={`border rounded-md shadow-md h-8 text-center w-32 mx-auto bg-zinc-100 ${ status === 'not_delivered' && 'border-red-500 !text-white !bg-red-500' }`} disabled={disabledBtn} onClick={() => handleClick('not_delivered')}>عدم حضور مشتری</button>
                </div>
            </div>
            <DeliveredModal isOpen={openModalDelivered} setIsOpen={setOpenModalDelivered} setStatus={setStatus} id={data.id} mutate={mutate}/>
            <NotDeliveredModal isOpen={openModalNotDelivered} setIsOpen={setOpenModalNotDelivered} setStatus={setStatus} id={data.id} mutate={mutate}/>
        </>
    )
}