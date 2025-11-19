import { BiLink } from "react-icons/bi";

export default function ButtonModal({ title = 'فایل ضمیمه' } : { title?: string }) {
    return (
        <div className="flex items-center gap-x-2">
            <span className="h-10 w-10 rounded-xl bg-zinc-100 flex items-center justify-center">
                <BiLink className="text-xl"/>
            </span>
            <span>{title}</span>
        </div>
    )
}