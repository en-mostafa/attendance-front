'use client'
import WalletChart from "@/components/pages/wallet/pipe-chart"
import Footer from "@/components/shared/Footer"
import Link from "next/link"

export default function Page() {
    return (
        <>
            <div className="flex flex-col">
                <Link href={'/link'} className="flex items-center gap-x-1 mb-4">
                    <h3>Wallet</h3>
                </Link>

                <div className="bg-card p-3 rounded-lg">
                    <div className="flex flex-col justify-between items-center">
                        <WalletChart />
                        <div className="flex flex-col w-full items-center">
                            <h2 className="font-semibold block text-end" dir="rtl">20,000,000 تومان</h2>
                            <span className="text-secondary text-xs">پایه حقوق</span>
                        </div>
                    </div>
                    <ul className="flex flex-col gap-y-1 pt-10 pb-5">
                        <li className="flex justify-between items-center border-b py-1">
                            <span dir="rtl">5,000,000 تومان</span>
                            <span className="text-secondary-foreground">بستانکاری</span>
                        </li>
                        <li className="flex justify-between items-center border-b py-1">
                            <span dir="rtl">5,000,000 تومان</span>
                            <span className="text-secondary-foreground">جریمه</span>
                        </li>
                        <li className="flex justify-between items-center border-b py-1">
                            <span dir="rtl">5,000,000 تومان</span>
                            <span className="text-secondary-foreground">موجودی ماه جاری</span>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>

    )
}