/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import SelectList from "@/components/ui/SelectList";
import { OrderDeliveredStatus } from "@/lib/constant";
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import DatePicker from 'react-multi-date-picker';
import { StatusProps } from "@/lib/types";
import { formatDate } from "@/lib/services/formatDate";
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

export default function Filter({ setSearchFilter } : { setSearchFilter: any}) {
    const [value, setValue] = useState<any>('');
    const [chooseStatus, setChooseStatus] = useState<StatusProps | null>(null);
    const date = formatDate(value?.unix)
    const [isOpen, setIsOpen] = useState(false);
    function open() {
      setIsOpen(true)
    }
    function close() {
      setIsOpen(false)
    }

    const handleSubmit = () => {
        const data = `history=${date}&status=${chooseStatus?.title || ''}&`
        setSearchFilter(data)
        close();
    }

    return (
        <>
            <Button onClick={open} className="fixed bottom-[92px] w-full maxWidth mx-auto">
                <div className="bg-zinc-900 text-white block rounded-md py-2 z-[30] mx-2">اعمال فیلتر</div>
            </Button>

            <Dialog open={isOpen} as="div" className="relative z-1010 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 h-full w-screen overflow-y-auto bg-[#0000005c] backdrop-blur-[2px]">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel transition className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                            <DialogTitle as="h3" className="text-base/7 font-medium">
                            فیلتر
                            </DialogTitle>
                            <SelectList 
                                label="انتخاب وضعیت"
                                selected={chooseStatus} 
                                setSelected={setChooseStatus} 
                                data={OrderDeliveredStatus} 
                            />
                            <div className="flex flex-col mt-3 mb-2">
                                <label className="label mb-2 block">انتخاب تاریخ</label>
                                <DatePicker
                                    value={value}
                                    onChange={setValue}
                                    calendar={persian}
                                    locale={persian_fa}
                                    inputClass="h-10 w-full rounded-xl bg-zinc-100 text-zinc-900 px-4 focus:outline-zinc-300"
                                    placeholder="انتخاب تاریخ ..."
                                />
                            </div>
                            <button type="button" className="w-full bg-zinc-900 text-white block rounded-md py-2 z-[30] mt-4" onClick={handleSubmit}>ثبت</button>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>

    )
}