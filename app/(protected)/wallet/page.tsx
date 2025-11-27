import WalletChart from "@/components/pages/wallet/pipe-chart"
import Footer from "@/components/shared/Footer"
import { pipe } from "@/lib/decimal";
import { wallet } from "@/services/wallet.serives"
import Link from "next/link"

export default async function Page() {
    const data = await wallet();

    return (
        <>
            <div className="flex flex-col">
                <Link href={'/link'} className="flex items-center gap-x-1 mb-4">
                    <h3>Wallet</h3>
                </Link>

                <div className="bg-card p-3 rounded-lg">
                    <div className="flex flex-col justify-between items-center">
                        <WalletChart fetchData={data} />
                        <div className="flex flex-col w-full items-center">
                            <span className="text-secondary text-xs mb-2">پایه حقوق</span>
                            <h2 className="font-semibold block text-end" dir="rtl"> {pipe(data?.salary)} تومان</h2>
                        </div>
                    </div>
                    <ul className="flex flex-col gap-y-1 pt-10 pb-5">
                        <li className="flex justify-between items-center border-b py-1">
                            <span className="text-secondary-foreground">بستانکاری</span>
                            <span dir="rtl">{pipe(data?.credits)} تومان</span>
                        </li>
                        <li className="flex justify-between items-center border-b py-1">
                            <span className="text-secondary-foreground">جریمه</span>
                            <span dir="rtl">{pipe(data?.penalties)} تومان</span>
                        </li>
                        <li className="flex justify-between items-center border-b py-1">
                            <span className="text-secondary-foreground">موجودی ماه جاری</span>
                            <span dir="rtl">{pipe(data?.balance)}تومان</span>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>

    )
}