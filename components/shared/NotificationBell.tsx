'use client'
import Link from "next/link";
import { BiBell } from "react-icons/bi";

export default function NotificationBell({ active } : { active: number }) {

    return (
        <div className="relative">
            {
                active !== 0 && <span className="absolute top-0 left-0 w-2 h-2 bg-emerald-500 rounded-full"></span>
            }
            <Link href="/notification">
                <BiBell className="text-xl"/>
            </Link>
        </div>
    )
}