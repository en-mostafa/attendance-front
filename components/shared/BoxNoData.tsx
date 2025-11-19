import { HiDocumentSearch } from "react-icons/hi";

export default function BoxNoData({ title = 'اطلاعاتی یافت نشد' } : { title?: string }) {
    return (
        <div className="flex flex-col items-center text-gray-400 mt-10">
            <HiDocumentSearch className="text-6xl"/>
            <span className="mt-2">{title}</span>
        </div>
    )
}