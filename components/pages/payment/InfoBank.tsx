/* eslint-disable react-hooks/exhaustive-deps */
import Loader from "@/components/ui/Loader";
import { UseGetData } from "@/lib/hooks/useGetData"
import { useEffect } from "react";

interface BankInfoProps {
    id: number,
    card_number: string,
    account_number: string,
    shaba_number: string,
    bank_id: number,
    user_bank: string,
}


export default function InfoBank({ setBankId } : { setBankId : (bankId : number) => void }) {
    const { data, isLoading } = UseGetData('/cart/banks');
    useEffect(() => {
        getBank()
    }, [data])
    
    if(isLoading) return <Loader />

    function getBank() {
       const banId = data?.map((bank: BankInfoProps) => bank.bank_id)
       setBankId(banId)
    }

    return (
        <ul className="border rounded-md mb-2">
            {
                data?.map((item: BankInfoProps) => 
                    <li key={item.id}>
                        <div className="flex text-sm items-center border-b p-2 justify-between">
                            <span className="text-gray-400">نام صاحب حساب</span>
                            <span className="font-bold">{item.user_bank}</span>
                        </div>
                        <div className="flex text-sm items-center border-b p-2 justify-between">
                            <span className="text-gray-400">شماره کارت :</span>
                            <span className="font-bold">{item.card_number}</span>
                        </div>
                        <div className="flex text-sm items-center border-b p-2 justify-between">
                            <span className="text-gray-400">شماره حساب :</span>
                            <span className="font-bold">{item.account_number}</span>
                        </div>
                        <div className="flex text-sm items-center border-b p-2 justify-between">
                            <span className="text-gray-400">شماره شبا :</span>
                            <span className="font-bold">IR-{item.shaba_number}</span>
                        </div>
                    </li>
                )
            }
         
        </ul>
    )
}
