import { TicketProps } from "@/lib/types";
import ButtonMenu from "../list/ButtonMenu";
import Status from "../list/Status";
import Department from "../list/Department";
import { Modal } from "@/components";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

export default function HeaderChat({ data } : { data: TicketProps }) {
    return (
        <div className="flex justify-between items-center p-4 fixed top-0 w-full bg-white z-[1] maxWidth mx-auto">
            <Link href="/ticket/list" className="flex items-center">
                <BiRightArrowAlt className="text-xl" />
                <div className="flex items-center gap-3">
                    <span className="rtl:mr-2 ltr:ml-2 text-sm font-bold">تیکت </span>
                    <span className="font-semibold">#{data.id}</span>
                </div>
            </Link>
            <div className="flex gap-x-2 items-center">
                <Status status={data.status}/>
                <Modal title="جزئیات تیکت" buttonElement={<ButtonMenu />}>
                    <div className="setting-items flex flex-col m-4">
                        <div className="flex flex-col text-xs border shadow-sm rounded-md p-3 mb-2">
                            <span className="font-bold">شناسه تیکت</span>
                            <span className="block pt-2 text-gray-500">#{data.id}</span>
                        </div>
                        <div className="flex flex-col text-xs border shadow-sm rounded-md p-3">
                            <span className="font-bold">دپارتمان</span>
                            <div className="text-gray-500 pt-2">
                                <Department title={data.department}/>
                            </div>
                        </div>
                        <div className="flex flex-col text-xs border shadow-sm rounded-md p-3 mt-2">
                            <span className="font-bold">عنوان تیکت</span>
                            <span className="block pt-2 text-gray-500">{data.title}</span>
                        </div>
                        {/*close ticket*/}
                        {/*<div className="flex flex-col text-xs border shadow-sm rounded-md p-3 mt-4">
                            <p className="font-bold text-red-800 flex items-center gap-x-1">
                                <i className='bx bx-error-circle text-xl'></i>
                                درصورت بستن تیکت امکان ارسال تیکت وجود ندارد
                            </p>
                            <div className="text-xs shadow-sm flex justify-end mt-2">
                                <button className="bg-red-500 text-white p-2 rounded-md">
                                    بستن تیکت
                                </button>
                            </div>
                        </div>*/}
                    </div>
                </Modal>
            </div>
        </div>
    )
}