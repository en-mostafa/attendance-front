/* eslint-disable @typescript-eslint/no-explicit-any */
import callApi from "@/app/api/callApi";
import { BiChevronLeft } from "react-icons/bi";

export default function ButtonShow({ id, title, status, setMutate } : { id: number, title:string, status:string, setMutate: any }) {

    const handleShow = async () => {
        try {
            const res = await callApi().get(`/notification?id=${id}`);
            if(res.status === 200) {
                setMutate()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex justify-between items-center pt-4 pr-4 pl-2 pb-2" onClick={handleShow}>
            <div className="text-xs font-semibold w-30 truncate">
                <span>{title}</span>
            </div>
            <div className="flex items-center">
                <span className={`w-20 h-5 rounded-full text-white text-[10px] flex justify-center items-center ${ status === 'seen' ? 'bg-red-500' : 'bg-emerald-500' }`}>{status === 'seen' ?'اعلان خوانده شده' : 'اعلان جدید'}</span>
                <BiChevronLeft className="text-xl"/>
            </div>
        </div>
    )
}