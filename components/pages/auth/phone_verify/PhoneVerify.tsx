'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import { BiPhoneCall } from "react-icons/bi";
import Button from '@/components/ui/Button';
import Input from "@/components/ui/Input";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import ValidationError from "@/lib/services/validationError";
import { useState } from "react";
import AlertHeader from "@/components/ui/AlertHeader";
import { toast } from "react-toastify";
import callApi from "@/app/api/callApi";
import SendCode from "@/components/ui/SendCode";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectPhoneVerify, updateHaveKarvan } from "@/lib/store/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { setToken } from "@/app/actions";


export default function PhoneVerify() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const phone = useAppSelector(selectPhoneVerify);
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [codeNumber, setCodeNumber] = useState<string>('');
    const [errors, setErrors] = useState<string[]>([]);
    const setKarvan = (verify: string) => {
        dispatch(updateHaveKarvan(verify))
    }
    let idToast: string | number;
    const formData = {
        code : codeNumber, phone_number: phone
    }

    useEffect(() => {
        if(phone === undefined) {
            router.push('/auth/sign_in')
            return;
        }
    }, [])

    //Validate Form
    const validateInputs = () => {
        if(codeNumber === '') {
            setErrors([
                'کد تایید را وارد نمایید'
            ]);
            return;
        }
        if(codeNumber.length !== 5) {
            setErrors([
                'کد تایید باید 5 رقم باشد'
            ]);
            return;
        }
        handleSubmitForm()
    }
    // Request server Recaptch
    const handleSubmitForm = function () {
        idToast = toast.loading('درحال بررسی اطلاعات ....')
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
                data: { gRecaptchaToken: gReCaptchaToken},
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
            });

            if (response?.data?.success === true) {
                try {
                    const res = await callApi().post('/delivery-code', formData)
                    if(res.status === 200) {
                        setToken(res?.data?.token);
                        setKarvan(res.data?.have_karvan);
                        toast.dismiss(idToast)
                        toast.success('اطلاعات با موفقیت ثبت شد.');
                        router.push('/dashboard')
                    }
                } catch (error) {
                    toast.dismiss(idToast)
                    if (error instanceof ValidationError) {
                        setErrors(Object.values(error.messages))
                    }
                    console.log(error)
                }
            } 
        }
        goAsync().then(() => { });
    };
    
    //Resend Code
    const handleResendCode = async () => {
        await callApi().post('/delivery-login', { phone_number: phone })
    }


    return (
        <div className="flex flex-col px-4 pt-24 bg-white maxWidth mx-auto h-screen">
            {/*Alert*/}
            { errors.length >= 1 && <AlertHeader data={errors}/>}
            
            {/*Inputs*/}
            <div className="flex flex-col gap-y-4">
                <div className="flex items-end justify-center text-gray-500 mb-4">
                    <BiPhoneCall className="text-3xl"/>
                    <h1 className="block">تایید شماره موبایل</h1>
                </div>
                <div className="relative">
                    <Input
                        type="number"
                        name="code"
                        value={codeNumber}
                        onChange={(e) => setCodeNumber(e.target.value)}
                        label="کد تایید"
                        placeholder="کد ارسال شده را وارد نمایید"
                    />
                    <SendCode handleResendCode={handleResendCode}/>
                </div>

                <Button type="button" onClick={validateInputs}>ثبت</Button>
            </div>
            <p className="text-center mt-14 text-base">
                ملزومات حج ضیافت عشق
                مرکز تولید و فروش لوازم حج 
                سفارش آنلاین و حضوری
            </p>
        </div>
    )
}



