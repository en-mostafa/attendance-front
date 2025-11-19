'use client'
import {Button, Dialog, DialogPanel } from '@headlessui/react';
import { BiSolidBellRing  } from "react-icons/bi";
import { useEffect, useState } from 'react'
import { UseGetData } from '@/lib/hooks/useGetData';
import Loader from '@/components/ui/Loader';

interface Props {
    id: number
    title: string,
    description: string
}

export default function NotificationBar() {
    const { data, isLoading } = UseGetData('/notifications/bar');
    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {
        if(data?.length === 0) {
            close()
        }
    }, [data])

    if(isLoading) return <></>

    function close() {
      setIsOpen(false)
    }

    return (
        <>
            { data?.length !== 0 && (
                <Dialog open={isOpen} as="div" className="relative z-1010 focus:outline-none" onClose={close}>
                    <div className="fixed inset-0 z-10 h-full w-screen overflow-y-auto bg-[#0000005c] backdrop-blur-[2px]">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <DialogPanel transition className="w-full max-w-md rounded-xl bg-white py-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                                <div className='flex justify-center'>
                                    <BiSolidBellRing className='text-5xl text-sky-500'/>
                                </div>
                                {isLoading && <Loader />}
                                {
                                    data?.map((item:Props) => 
                                        <div key={item.id} className='flex justify-center flex-col text-center text-sm'>
                                            <h3 className='mb-7 mt-3 px-6'>{item.title}</h3>
                                            <p className='text-zinc-500 max-h-60 overflow-y-auto px-6 text-justify'>
                                                {item.description}
                                            </p>
                                        </div>
                                    )   
                                }
                                <Button onClick={close} className="bg-zinc-900 text-white h-9 text-xs w-28 flex justify-center items-center mx-auto rounded-lg mt-3">
                                    متوجه شدم
                                </Button>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            )}

        </>
    )
}