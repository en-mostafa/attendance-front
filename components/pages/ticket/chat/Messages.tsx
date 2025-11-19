import { DownloadLink } from "@/components/ui/DownloadLink";
import { TicketProps } from "@/lib/types";
import { useEffect } from "react";
import { BiErrorCircle } from "react-icons/bi";


export default function Messages({ data } : { data:TicketProps }) {
    useEffect(() => window.scrollTo({ top: 1000, behavior: "smooth" }), [data]);
    return (
        <div className="ticket-chat px-4" >
            <div className="text-red-800 bg-red-100 text-xs p-2 rounded-xl inline-block my-1.5" role="alert">
                <div className="flex gap-x-3">
                    <BiErrorCircle className="text-2xl text-red-600"/>
                    <span className="font-semibold leading-5">در صورت وجود هرگونه مشکل یا سوال پیرامون پشتیبانی لطفا این دپارتمان را انتخاب فرمایید. </span>
                </div>
            </div>
            {
                data.messages.map((message, index) => 
                    <div key={index} className={`flex ${message.from === 'user' ? 'justify-start' : 'justify-end'}  `}>
                        <div className={` text-xs p-2 rounded-xl border inline-block my-1.5 ${message.from === 'user' ? 'text-white bg-zinc-900' : 'bg-zinc-100'}`}>
                            <p className={`font-semibold mb-5 ${ message.from === 'user' ? 'text-white' : '' }`}>{message.message}</p>
                            <div className="flex flex-col">
                                {
                                    message.file.length !== 0 && (
                                        message.file.map(files => 
                                            <DownloadLink key={files.file_name} file={files} message={message}/>
                                        )
                                    )
                                }
                                <div className="flex flex-row items-center justify-between text-xs mt-2 text-zinc-400">
                                    <span className="block w-36 truncate">{ message.from === 'user' ? message.user_name + '' + message.user_last_name : 'اپراتور' }</span>
                                    <div className="flex flex-row gap-x-2 items-end">
                                        <span className="block text-left">{message.jalali_create}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

