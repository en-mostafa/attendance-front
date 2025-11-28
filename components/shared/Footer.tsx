'use client'
import { today } from "@/utilities/today-jalaly";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidWallet } from "react-icons/bi";

export default function Footer() {
    const pathname = usePathname();
    return (
        <footer className="bottom-0 w-full left-0 right-0 fixed z-1000 mx-auto">
            <ul className="bg-primary h-[70px] rounded-[96px] p-4 mx-6 mb-7 flex justify-between items-center">
                <li>
                    <Link
                        href="/"
                        className={`flex items-center px-3 py-1 gap-x-1 rounded-full ${pathname === '/' && 'bg-destructive'}`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.80022 0.445935C8.45851 0.157947 8.02601 0 7.57913 0C7.13225 0 6.69976 0.157947 6.35805 0.445935L0.673701 5.24184C0.462714 5.41966 0.29311 5.64141 0.176743 5.8916C0.060377 6.14179 5.70361e-05 6.41437 0 6.6903V14.5263C0 15.3398 0.660227 16 1.47372 16H4.0001C4.39095 16 4.7658 15.8447 5.04218 15.5684C5.31855 15.292 5.47382 14.9171 5.47382 14.5263V11.1553C5.47382 10.5826 5.93025 10.1178 6.49869 10.1026H8.65958C8.93392 10.1098 9.19458 10.2239 9.38602 10.4206C9.57746 10.6172 9.68454 10.8808 9.68445 11.1553V14.5263C9.68445 15.3398 10.3447 16 11.1582 16H13.6845C14.0754 16 14.4502 15.8447 14.7266 15.5684C15.003 15.292 15.1583 14.9171 15.1583 14.5263V6.68946C15.1582 6.41353 15.0979 6.14095 14.9815 5.89076C14.8652 5.64057 14.6956 5.41882 14.4846 5.241L8.80022 0.445935Z" fill={pathname === '/' ? 'orange' : 'white'} />
                        </svg>
                        <span className={`mt-1 text-background ${pathname !== '/' && 'hidden'}`}>HOME</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/wallet"
                        className={`flex items-center px-3 py-1 gap-x-1 rounded-full mr-3 ${pathname === '/wallet' && 'bg-destructive mr-0'}`}>
                        <BiSolidWallet className={`text-2xl ${pathname === '/wallet' ? "text-orange" : 'text-white'} `} />
                        <span className={`mt-1 text-background ${pathname !== '/wallet' && 'hidden'}`}>Wallet</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dashboard"
                        className={`flex items-center px-3 py-1 gap-x-1 rounded-full mx-3 ${pathname === '/dashboard' && 'bg-destructive mx-0'}`}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 10H7C7.26522 10 7.51957 9.89464 7.70711 9.70711C7.89464 9.51957 8 9.26522 8 9V1C8 0.734784 7.89464 0.48043 7.70711 0.292893C7.51957 0.105357 7.26522 0 7 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V9C0 9.26522 0.105357 9.51957 0.292893 9.70711C0.48043 9.89464 0.734784 10 1 10ZM0 17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H7C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17V13C8 12.7348 7.89464 12.4804 7.70711 12.2929C7.51957 12.1054 7.26522 12 7 12H1C0.734784 12 0.48043 12.1054 0.292893 12.2929C0.105357 12.4804 0 12.7348 0 13V17ZM10 17C10 17.2652 10.1054 17.5196 10.2929 17.7071C10.4804 17.8946 10.7348 18 11 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V10C18 9.73478 17.8946 9.48043 17.7071 9.29289C17.5196 9.10536 17.2652 9 17 9H11C10.7348 9 10.4804 9.10536 10.2929 9.29289C10.1054 9.48043 10 9.73478 10 10V17ZM11 7H17C17.2652 7 17.5196 6.89464 17.7071 6.70711C17.8946 6.51957 18 6.26522 18 6V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0H11C10.7348 0 10.4804 0.105357 10.2929 0.292893C10.1054 0.48043 10 0.734784 10 1V6C10 6.26522 10.1054 6.51957 10.2929 6.70711C10.4804 6.89464 10.7348 7 11 7Z" fill={pathname === '/dashboard' ? 'orange' : 'white'} />
                        </svg>
                        <span className={`mt-1 text-background ${pathname !== '/dashboard' && 'hidden'}`}>DASHBOARD</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href={`/history?date=${today}`}
                        className={`flex items-center px-3 py-1 gap-x-1 rounded-full ${pathname === '/history' && 'bg-destructive'}`}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 15.3C0 16.83 1.17 18 2.7 18H15.3C16.83 18 18 16.83 18 15.3V8.1H0V15.3ZM15.3 1.8H13.5V0.9C13.5 0.36 13.14 0 12.6 0C12.06 0 11.7 0.36 11.7 0.9V1.8H6.3V0.9C6.3 0.36 5.94 0 5.4 0C4.86 0 4.5 0.36 4.5 0.9V1.8H2.7C1.17 1.8 0 2.97 0 4.5V6.3H18V4.5C18 2.97 16.83 1.8 15.3 1.8Z" fill={pathname === '/history' ? 'orange' : 'white'} />
                        </svg>
                        <span className={`mt-1 text-background ${pathname !== '/history' && 'hidden'}`}>HISTORY</span>
                    </Link>
                </li>
            </ul>
        </footer>
    )
}