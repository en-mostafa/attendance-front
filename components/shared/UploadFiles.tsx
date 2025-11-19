/* eslint-disable @typescript-eslint/no-explicit-any */

import { typeFile } from "@/lib/constant";
import { ChangeEvent, useEffect, useState } from "react";
import { BiFolderPlus, BiFolderOpen, BiTrash } from "react-icons/bi";


export default function UploadFiles({ setFiles } : {setFiles : any}) {
    const [error, setError] = useState('');
    const [filesUp, setFilesUp] = useState<any>([]);

    useEffect(() => {
        setFiles(filesUp)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filesUp])

    const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(!file) {
            return;
        }
        const inValidFile = typeFile.some(type => type.title === file.type);
        const inValidSize = file.size > 100 * 1024 * 1024;
        if(inValidFile && inValidSize) {
            setError('فرمت یا حجم فایل را بررسی نمایید !')
            return
        }
        if(filesUp.length < 3) {
            setFilesUp([...filesUp, file])
        }
    }
 
    const handleDelete = (index: number) => {
        setFilesUp(filesUp.filter((file:any, i: number) => i !== index))
    }


    return (
        <div className="flex flex-col m-4">
            {error !== '' && <span className="text-red-500 text-sm font-bold block text-center mb-2">{error}</span>}
            <div className="border border-dashed rounded-md shadow-sm p-4 bg-white/6 bg-zinc-100">
                <label htmlFor="up" className="flex flex-col items-center text-xs">
                    <BiFolderPlus className='text-3xl text-gray-500'/>
                    <div className="text-gray-400 font-bold mt-4 mb-2">جهت انتخاب فایل کلیک کنید</div>
                    <p className="text-center text-gray-400 text-xs mb-2"> jpeg, png, jpg, gif, docx, pdf, rar, zip, mp4  (حداکثر 100 مگابایت)</p>
                </label>
                <input id="up" type="file" onChange={handleChangeFile} className="hidden" />
            </div>
            <div className="border flex flex-col gap-y-3 shadow-sm rounded-md p-3 mt-5">
                {
                    filesUp.map((file:any, index:number) => 
                        <div key={index} className="flex justify-between items-center text-xs font-bold">
                            <div className='flex items-center gap-x-2'>
                                <span className="w-10 h-8 rounded-lg bg-zinc-100 flex gap-x-2 items-center justify-center">
                                    <BiFolderOpen className='text-xl'/>
                                </span>
                                <span>{file.name}</span>
                            </div>
                            <button type="button" onClick={() => handleDelete(index)}>
                                <BiTrash className='text-xl text-red-500'/>
                            </button>
                        </div>
                    )
                }
            </div>
        </div> 
    )
}