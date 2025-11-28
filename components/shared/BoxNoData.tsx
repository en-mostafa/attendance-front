import SVG from "@/public/no-data-6.svg";
import Image from "next/image";

export default function BoxNoData({ title = 'اطلاعاتی یافت نشد' }: { title?: string }) {
    return (
        <div className="flex flex-col items-center text-gray-400 mt-10">
            <Image
                src={SVG}
                alt="svg"
                className="w-32 h-32"
            />
            <span className="">{title}</span>
        </div>
    )
}