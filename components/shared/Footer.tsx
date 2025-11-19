import Link from "next/link";
import { BiReceipt, BiHomeAlt2, BiMenu, BiMessageAdd , BiBell  } from "react-icons/bi";
import Navbar from "./Navbar";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const pathname = usePathname();
    return (
        <footer className="px-4 fixed bottom-0 right-0 left-0 pb-4 pt-4 bg-white z-1000 maxWidth mx-auto">
            <ul className="footer-items flex justify-between items-baseline">
                <li>
                    <Link href="/orders" className={`flex flex-col items-center text-zinc-500 w-16 ${pathname === '/orders' ? 'active' : ''}`}>
                        <BiReceipt className="text-xl"/>
                        <span className="mt-1">سفارشات</span>
                    </Link>
                </li>
                <li>
                    <Link href="/ticket/add" className={`flex flex-col items-center text-zinc-500 w-16 ${pathname === '/ticket/add' ? 'active' : ''}`}>
                        <BiMessageAdd className="text-xl"/>
                        <span className="mt-1">تیکت</span>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard" className={`rounded-full bg-zinc-900 flex justify-center items-center w-12 h-12 ${pathname === '/dashboard' ? 'active' : ''}`}>
                        <BiHomeAlt2 className="text-2xl text-white"/>
                    </Link>
                </li>
                <li>
                    <Link href="/notification" className={`flex flex-col items-center text-zinc-500 w-16 ${pathname === '/notification' ? 'active' : ''}`}>
                        <BiBell className="text-xl"/>
                        <span className="mt-1">اعلانات</span>
                    </Link>
                </li>
                <li>
                    <div className="nav-modal flex flex-col items-center text-zinc-500 w-16" onClick={() => setShowMenu(!showMenu)}>
                        <BiMenu className="text-xl"/>
                        <span className="mt-1">منو </span>
                    </div>
                    <Navbar showMenu={showMenu} setShowMenu={setShowMenu}/>
                </li>
            </ul>
        </footer>
    )
}