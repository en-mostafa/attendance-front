'use client'
import { ModalProps } from '@/lib/types';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'


export default function Modal({ title, buttonElement, btnClass, children } : ModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    function open() {
      setIsOpen(true)
    }
    function close() {
      setIsOpen(false)
    }
  

    return (
        <>
            <Button onClick={open} className={btnClass}>
                {buttonElement}
            </Button>

            <Dialog open={isOpen} as="div" className="relative z-1010 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 h-full w-screen overflow-y-auto bg-[#0000005c] backdrop-blur-[2px]">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel transition className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                            <DialogTitle as="h3" className="text-base/7 font-medium">
                                {title}
                            </DialogTitle>
                            { children }
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}