'use client'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Input from '@/components/ui/Input';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import callApi from '@/app/api/callApi';
import { ToastError, ToastStartLoading, ToastStopLoading, ToastSuccess } from '@/lib/services/ToastController';
import { ModalDeliveredProps } from '@/lib/types';

export default function NotDeliveredModal({ isOpen, setIsOpen, setStatus, id, mutate } : ModalDeliveredProps) {
    const [input, setInput] = useState<string>('');

    const handleSubmitForm = async() => {
        try {
            ToastStartLoading()
            const res = await callApi().post(`/delivery/transport/update?id=${id}&status=not_delivered&deny_description=${input}`)
            if(res.status === 200) {
                ToastStopLoading()
                ToastSuccess()
                mutate()
                setIsOpen(false)
            }
        } catch (error) {
            ToastStopLoading()
            console.log(error)
            ToastError('با خطا مواجه شد !')
        }
    }

    const handleCloseModal = () => {
        setStatus('sending')
        setIsOpen(false)
    }

    return (
        <Dialog open={isOpen} as="div" className="relative z-1010 focus:outline-none" onClose={handleCloseModal}>
            <div className="fixed inset-0 z-10 h-full w-screen overflow-y-auto bg-[#0000005c] backdrop-blur-[2px]">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel transition className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                        <DialogTitle as="h3" className="text-base/7 font-medium">
                            عودت مرسوله 
                        </DialogTitle>
                        <form className='mt-4'>
                            <Input 
                                label='دلیل عودت مرسوله'
                                type='text'
                                name='deny_description'
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                placeholder='دلیل عودت مرسوله را وارد نمایید'
                            />
                            <Button type='button' onClick={handleSubmitForm}>ثبت</Button>
                        </form>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
