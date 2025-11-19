'use client'
import callApi from "@/app/api/callApi";
import AlertHeader from "@/components/ui/AlertHeader";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import SelectList from "@/components/ui/SelectList";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ImaskPipe } from "@/lib/services/ImaskPipe";
import { ToastStartLoading, ToastStopLoading, ToastSuccess } from "@/lib/services/ToastController";
import ValidationError from "@/lib/services/validationError";
import { selectDataUser, updateUser } from "@/lib/store/auth";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { BiMoney, BiArchiveOut  } from "react-icons/bi";

export default function AddTransaction() {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const profile = useAppSelector(selectDataUser);
    const [bank, setBank] = useState(profile.shaba[0]);
    const [price, setPrice] = useState<string>('');
    const [cash, setCash] = useState(profile);
    const [errors, setErrors] = useState<string[]>([]);
    dispatch(updateUser(cash));
    const data = { price, shaba_id : bank.id }


    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPrice(value.replace(/,/g, ''))
    }
    const updateWallateBalance = () => {
        setCash({
            ...cash,
            wallet_balance: parseInt(cash.wallet_balance) - parseInt(price)
        })
    }
    const validateInput = () => {
        if(price === '') {
            setErrors(['مقدار برداشت را وارد نمایید.'])
            return
        }
        if(price < '100000') {
            setErrors(['مقدار برداشت باید بیشتر از مقدار مشخص باشد']);
            return
        }
        if(cash.wallet_balance < price) {
            setErrors(['موجودی شما کافی نمی باشد.']);
            return
        }
        handleSubmit()
    }
    const handleSubmit = async () => {
        try {
            ToastStartLoading()
            const res = await callApi().post('/delivery/check/store', data)
            console.log(res)
            if(res.status === 200) {
                router.push('/transaction/list')
                ToastStopLoading()
                ToastSuccess()
                updateWallateBalance()
            }

        } catch (error) {
            ToastStopLoading()
            if (error instanceof ValidationError) {
                setErrors(Object.values(error.messages))
            }
            console.log(error)
        }
    }


    return (
        <div className="px-4">
            {/*alert*/}
            <div className="px-4">
                { errors.length >= 1 && <AlertHeader data={errors}/> }
            </div>
            <ul className="border px-3 py-4 shadow-md flex flex-col gap-y-2 rounded-md mt-4">
                <li className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-x-2 text-zinc-600">
                        <BiMoney className="text-xl"/>
                        <span className="text-sm font-bold">موجودی</span>
                    </div>
                    <span className="text-lg font-bold text-emerald-500">{ ImaskPipe(`${cash.wallet_balance < 0 ? '0' : cash.wallet_balance}`) } <sub className="font-normal text-xs">تومان</sub></span>
                </li>
                <li className="flex items-center justify-between ">
                    <div className="flex items-center gap-x-2 text-red-500">
                        <BiArchiveOut className="text-xl"/>
                        <span className="text-xs">حداقل برداشت روزانه</span>
                    </div>
                    <span className="text-sm font-bold">100,000 <sub className="font-normal text-xs">تومان</sub></span>
                </li>
                <li className="flex items-center justify-between ">
                    <div className="flex items-center gap-x-2 text-red-500">
                        <BiArchiveOut className="text-xl"/>
                        <span className="text-xs">حداکثر برداشت روزانه</span>
                    </div>
                    <span className="text-sm font-bold">10,000,000 <sub className="font-normal text-xs">تومان</sub></span>
                </li>
            </ul>
            <h5 className="mb-4 mt-10">ثبت درخواست</h5>
            <div>
                <Input 
                    label="مقداربرداشت (تومان)"
                    type="text"
                    name="price"
                    value={ImaskPipe(`${price}`)}
                    onChange={handleChangeInput}
                    inputClass="mb-2"
                    placeholder="مقدار برداشت را وارد نمایید"
                />
                <SelectList 
                    selected={bank} 
                    setSelected={setBank} 
                    data={profile.shaba} 
                    label="انتخاب بانک"
                />
                <Button type="button" onClick={validateInput}>ثبت درخواست</Button>
            </div>
        </div>
    )
}