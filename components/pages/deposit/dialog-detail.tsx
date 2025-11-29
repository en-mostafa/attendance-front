import Modal from "@/components/ui/Modal"
import Textarea from "@/components/ui/Textarea"
import { Transaction } from "@/types"
import Image from "next/image"
import { BiLogIn } from "react-icons/bi"

export const DialogDetail = ({ item }: { item: Transaction }) => {
    return (
        <Modal
            title="transaction"
            buttonElement={<div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-x-1 text-xs mt-2">
                    <BiLogIn className="text-2xl -scale-100" />
                </div>
                <span className="text-secondary text-2xs mt-1">Details</span>
            </div>}
        >
            <div className="flex flex-col">
                <Textarea
                    label="توضیحات"
                    placeholder=""
                    rows={5}
                    cols={4}
                    name=""
                    defaultValue={item.description}
                    CustomClass="bg-muted/50"

                />
                {item.image && (
                    <>
                        <span className="label mb-1 text-xs">فایل</span>
                        <div className="border h-96">
                            <Image
                                src={item.image}
                                width={100}
                                height={100}
                                className="h-full w-full"
                                alt="image"
                            />
                        </div>
                    </>
                )}
            </div>
        </Modal>
    )
}