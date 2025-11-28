import { Input, Textarea } from "@/components";
import { profile } from "@/services/profile.services";
import { User } from "@/types";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export default async function Page() {
    const user: User = await profile();

    return (
        <>
            <Link href={'/dashboard'} className="flex items-center gap-x-1 mb-4">
                <BiChevronRight className="text-2xl" />
                <h3>Profile</h3>
            </Link>
            <form action="" className="p-4 flex flex-col gap-y-3">
                <Input
                    label="نام"
                    type="text"
                    name="name"
                    value={user?.name}
                    placeholder="نام خود را وارد نمایید"
                    readOnly
                />
                <Input
                    label="نام خانوادگی"
                    type="text"
                    name="last-name"
                    value={user?.family}
                    placeholder="نام خانوادگی  خود را وارد نمایید"
                    readOnly
                />
                <Input
                    label="شناسه کاربری"
                    type="text"
                    name="id"
                    value={String(user?.id)}
                    placeholder="شناسه کاربری خود را وارد نمایید"
                    readOnly
                />
                <Input
                    label="شماره موبایل"
                    type="number"
                    name="phone-number"
                    value={user?.phone}
                    placeholder="شماره موبایل خود را وارد نمایید"
                    readOnly
                />
                <Input
                    label="کد ملی"
                    type="text"
                    name="title"
                    value={user?.nationalCode ?? ""}
                    placeholder=" کد ملی خود را وارد نمایید"
                    readOnly
                />
                <Textarea
                    label='آدرس'
                    name='address'
                    rows={5}
                    cols={6}
                    value={'user.address'}
                    placeholder='آدرس خود را وارد نمایید'
                    readOnly
                />
            </form>
        </>
    )
}