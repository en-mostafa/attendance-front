'use client'
import { BiPhoneCall } from "react-icons/bi";
import Button from '@/components/ui/Button';
import Input from "@/components/ui/Input";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import ValidationError from "@/lib/services/validationError";
import callApi from "@/app/api/callApi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { updatePhoneNumber } from "@/lib/store/auth";
import { toast } from "react-toastify";
import AlertHeader from "@/components/ui/AlertHeader";
import { ToastStartLoading, ToastStopLoading } from "@/lib/services/ToastController";


export default function SignIn() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [errors, setErrors] = useState<string[]>([]);
    const setPhoneVerify = (phone: string) => {
        dispatch(updatePhoneNumber(phone))
    }

    //Validate Form
    const validateInputs = () => {
        if(phoneNumber === '' || phoneNumber.length !== 11) {
            setErrors(['شماره موبایل را با فرمت صحیح وارد نمایید']);
            return;
        }
        handleSubmitForm()
    }
    // Requer server Recaptch
    const handleSubmitForm = function () {
        ToastStartLoading()
        if (!executeRecaptcha) {
            console.log("Execute recaptcha not available yet");
            toast.error('اجرای ریکپچا هنوز در دسترس نیست');
            return;
        }
        executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
            submitEnquiryForm(gReCaptchaToken);
        });
    };
    // Request server data 
    const submitEnquiryForm = (gReCaptchaToken: string) => {
        async function goAsync() {
            const response = await axios({
                method: "post",
                url: "/api/contactFormSubmit",
                data: {
                    gRecaptchaToken: gReCaptchaToken,
                },
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
            });

            if (response?.data?.success === true) {
                try {
                    const res = await callApi().post('/delivery-login', {phone_number: phoneNumber});
                    if (res.status === 200) {
                        setPhoneVerify(res?.data?.phone_number);
                        router.push('/auth/phone_verify');
                        ToastStopLoading()
                        await toast.success('اطلاعات با موفقیت ثبت شد.')
                    }
                } catch (error) {
                    ToastStopLoading()
                    if (error instanceof ValidationError) {
                        setErrors(Object.values(error.messages))
                    }
                    console.log(error)
                }
            } 
        }
        goAsync().then(() => { });
    };


    return (
        <div className="flex flex-col px-4 pt-24 bg-white maxWidth mx-auto h-screen">
            {/*Alert*/}
            { errors.length >= 1 && <AlertHeader data={errors}/>}
            {/*Inputs*/}
            <div className="flex flex-col gap-y-4">
                <div className="flex items-end justify-center text-gray-500 mb-4">
                    <BiPhoneCall className="text-3xl" />
                    <h1 className="block">شماره موبایل خود را وارد نمایید</h1>
                </div>
                <Input
                    type="number"
                    name="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    label="شماره موبایل"
                    placeholder="شماره موبایل را وارد نمایید"
                />
                <Button type="button" onClick={validateInputs}>ورود</Button>
            </div>
            <p className="text-center mt-14 text-base">
                ملزومات حج ضیافت عشق
                مرکز تولید و فروش لوازم حج 
                سفارش آنلاین و حضوری
            </p>
        </div>
    )
}



