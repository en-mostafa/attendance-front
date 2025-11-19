/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { BiSend } from "react-icons/bi";
import ButtonModal from "../list/ButtonModal";
import { Modal } from "@/components";
import { useEffect, useRef, useState } from "react";
import UploadFiles from "@/components/shared/UploadFiles";
import { ToastError, ToastStartLoading, ToastStopLoading, ToastSuccess } from "@/lib/services/ToastController";
import callApi from "@/app/api/callApi";

export default function FooterChat({ id, setMutate } : { id: any, setMutate: any }) {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [text, setText] = useState<string>('');
    const [heightScroll, setHeigthScroll] = useState<number | undefined>(undefined);
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const height = textareaRef.current?.scrollHeight
        setHeigthScroll(height)
    }, [text])
 
    const validate = () => {
        if(text === '') {
            ToastError('متن خود را وارد نمایید !')
            return
        }
        handleFormSubmit()
    }

    const handleFormSubmit = async () => {
        const formData = new FormData();
        formData.append("id", id);
        formData.append("message", text);
        files.forEach((file, index) => {
            formData.append(`files[${index}]`, file);
        });

        try {
            setLoading(true)
            ToastStartLoading()
            const res = await callApi().post('/delivery/ticket/message/store', formData)
            if(res.status === 200) {
                setMutate()
                setText('')
                setLoading(false)
                ToastStopLoading()
                setFiles([]);
                ToastSuccess()
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            ToastStopLoading()
        }
    }


    return (
        <div className="fixed bottom-0 w-full z-1010 maxWidth mx-auto">
            <div className="flex justify-center gap-x-3 text-sm items-end bg-white p-2 pt-8 border-t maxWidth mx-auto">
                <button type="button" onClick={validate} disabled={loading}>
                    <BiSend className="text-4xl" />
                </button>
                <div className="grow js-grow max-h-80 overflow-hidden w-full min-h-[2.5rem] rounded-lg relative bg-white border border-gray-400" style={{ height:`${heightScroll}px` }}>
                    <textarea
                        ref={textareaRef}
                        value={text}
                        onChange={e => setText(e.target.value)}
                        rows={10}
                        className="break-words m-0 resize-none placeholder:text-xs text-sm outline-none text-right leading-5 pt-[10px] px-2 w-full h-full overflow-y-auto top-0 left-0 absolute border-none whitespace-pre-wrap"
                        placeholder="متن خود را وارد نمایید..."></textarea>
                </div>
                <Modal title="آپلود فایل" buttonElement={<ButtonModal />}>
                    <UploadFiles setFiles={setFiles}/>
                </Modal>
            </div>
        </div>
    )
}