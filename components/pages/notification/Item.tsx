/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "@/components";
import ButtonShow from "./ButtonShow";
import { NotificationProps } from "@/lib/types";

export default function Item({ item , setMutate} : { item : NotificationProps, setMutate: any }) {
    return (
        <li className="border-b">
            <Modal title="مشاهده اعلان" buttonElement={<ButtonShow id={item.id} title={item.title} status={item.status} setMutate={setMutate}/>} btnClass="w-full">
                <p className="text-sm my-3 px-4 text-gray-500">
                    {item.description}
                </p>
            </Modal>
            <p className="text-xs my-3 px-4 text-gray-500 w-56 truncate">
                {item.description}
            </p>
        </li>
    )
}