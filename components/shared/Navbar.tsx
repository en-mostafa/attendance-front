'use client'
import { useRouter } from "next/navigation";
import { BiChevronsDown, BiUser, BiMessageDetail, BiArrowBack, BiTransferAlt, BiMenu } from "react-icons/bi";
import Logout from "../pages/logout/Logout";
import { useState } from "react";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const router = useRouter();
    const handleClick = (link: string) => {
        router.push(link);
        setShowMenu(false)
    }

    return (
        <>
            <div className="nav-modal flex flex-col items-center text-zinc-500 w-16" onClick={() => setShowMenu(!showMenu)}>
                <BiMenu className="text-xl" />
                <span className="mt-1">منو </span>
            </div>
            <div className={`content-nav fixed right-0 h-screen w-full z-1010 transition duration-500 justify-end ${showMenu ? 'top-0' : 'show-menu'}`}>
                <div className="content bg-white flex flex-col translate-y-0 maxWidth mx-auto" style={{ height: "100vh" }}>
                    {/*<!-- close nav -->*/}
                    <button type="button" className="close-nav flex justify-center mt-2" onClick={() => setShowMenu(false)}>
                        <BiChevronsDown className="text-2xl" />
                    </button>
                    {/*<!-- content -->*/}
                    <main className="main mt-3 mb-4 px-4 grow overflow-y-auto">
                        <nav>
                            <ul className="space-y-2">
                                <li>
                                    <button type="button" onClick={() => handleClick('/profile')} className="flex w-full items-center justify-between border-b border-zinc-100 pb-2">
                                        <div className="flex items-center">
                                            <BiUser className="text-xl" />
                                            <span className="rtl:mr-2 ltr:ml-2">پروفایل</span>
                                        </div>
                                        <BiArrowBack className="text-lg text-gray-600" />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => handleClick('/ticket/list')} className="flex items-center w-full justify-between border-b border-zinc-100 pb-2">
                                        <div className="flex items-center">
                                            <BiMessageDetail className="text-xl" />
                                            <span className="rtl:mr-2 ltr:ml-2">لیست تیکت ها</span>
                                        </div>
                                        <BiArrowBack className="text-lg text-gray-600" />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => handleClick('/transaction/list')} className="flex items-center w-full justify-between border-b border-zinc-100 pb-2">
                                        <div className="flex items-center">
                                            <BiTransferAlt className="text-xl" />
                                            <span className="rtl:mr-2 ltr:ml-2">در خواست های تسویه</span>
                                        </div>
                                        <BiArrowBack className="text-lg text-gray-600" />
                                    </button>
                                </li>
                                <li>
                                    {/*<Logout />*/}
                                </li>
                            </ul>
                        </nav>
                    </main>
                </div>
            </div>
        </>
    )
}