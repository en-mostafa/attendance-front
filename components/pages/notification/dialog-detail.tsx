import Input from "@/components/ui/Input"
import Modal from "@/components/ui/Modal"
import Textarea from "@/components/ui/Textarea"
import { Notification } from "@/types"
import { BiLogIn } from "react-icons/bi"

export const DialogDetail = ({ item }: { item: Notification }) => {
    return (
        <Modal
            title="notification"
            buttonElement={<div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-x-1 text-xs mt-2">
                    <BiLogIn className="text-2xl -scale-100" />
                </div>
            </div>}
        >
            <div className="flex flex-col">
                <Input
                    label="عنوان"
                    name=""
                    placeholder=""
                    defaultValue={item.title}
                    inputclass="!bg-muted/50"
                    readOnly
                />
                <Textarea
                    label="توضیحات"
                    placeholder=""
                    rows={5}
                    cols={4}
                    name=""
                    defaultValue={item.description}
                    CustomClass="bg-muted/50"
                    readOnly
                />
            </div>
        </Modal>
    )
}