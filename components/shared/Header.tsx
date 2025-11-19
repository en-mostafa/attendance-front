import Link from "next/link";
import { BiUser, BiRightArrowAlt } from "react-icons/bi";
import NotificationBell from "./NotificationBell";

export default function Header() {
    return (
        <div>
            <div className="flex items-center justify-between p-4 fixed top-0 left-0 right-0 w-full bg-white z-[20] maxWidth mx-auto">
                <Link href={'/link'} className="flex items-center gap-x-1">
                    {true && <BiRightArrowAlt className="text-xl" />}
                    <h3>{'title'}</h3>
                </Link>
                <div className="flex items-end gap-x-3">
                    <NotificationBell active={3} />
                    <Link href="/profile">
                        <BiUser className="text-xl" />
                    </Link>
                </div>
            </div>
        </div>

    )
}