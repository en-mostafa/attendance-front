'use client'
import {AlertHeader, Button, Input, Modal, SelectList, Textarea} from "@/components";
import { SelectOptionsProps } from "@/lib/types";
import { useState } from "react";
import ButtonModal from "./ButtonModal";
import { departmentTicket } from "@/lib/constant";
import UploadFiles from "@/components/shared/UploadFiles";
import callApi from "@/app/api/callApi";
import ValidationError from "@/lib/services/validationError";
import { ToastStartLoading, ToastStopLoading, ToastSuccess } from "@/lib/services/ToastController";
import { useRouter } from "next/navigation";


export default function AddTicket() {
    const router = useRouter();
    const [chooseDepartment, setChooseDepartment] = useState<SelectOptionsProps | null>(null);
    const [description, setDescription] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [files, setFiles] = useState([]);
    const [errors, setErrors] = useState<string[]>([])

    const handleValidate = () => {
        if(title === '') {
            setErrors(['فیلد موضوع الزامی است.'])
            return
        }
        if(description === '') {
            setErrors(['فیلد متن الزامی است.'])
            return
        }
        if(chooseDepartment === null) {
            setErrors(['فیلد دپارتمان الزامی است.'])
            return
        }
        handleFormSubmit()
    }

    const handleFormSubmit = async () => {
        const formData = new FormData();
        // Append non-file fields
        formData.append("title", title);
        formData.append("description", description);
        formData.append("department", chooseDepartment?.title || "");
        files.forEach((file, index) => {
            formData.append(`files[${index}]`, file);
        });

        try {
            ToastStartLoading()
            const res = await callApi().post('/delivery/ticket/store', formData)
            if(res.status === 200) {
                router.push('/ticket/list');
                ToastStopLoading()
                ToastSuccess()
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
        <>
            {/*alert*/}
            <div className="px-4">
                { errors.length >= 1 && <AlertHeader data={errors}/> }
            </div>
            <form action="" className="p-4 flex flex-col gap-y-3">
                <SelectList 
                    label="انتخاب دپارتمان"
                    selected={chooseDepartment} 
                    setSelected={setChooseDepartment} 
                    data={departmentTicket} 
                />
                <Input 
                    label="موضوع"
                    type="text"
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="موضوع خود را وارد نمایید"
                />
                <Textarea 
                    label='متن'
                    name='description'
                    rows={5}
                    cols={6}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder='متن خود را وارد نمایید'
                />
                <Modal title="آپلود فایل" buttonElement={<ButtonModal />}>
                    <UploadFiles setFiles={setFiles}/>
                </Modal>
                <Button type="button" onClick={handleValidate}>ثبت</Button>
            </form>
        </>
    )
}