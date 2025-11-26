'use client'
import Link from "next/link";
import { BiChevronDown, BiChevronLeft } from "react-icons/bi";
import { Field, Label, Select } from '@headlessui/react'
import clsx from 'clsx'
import { CalDatePicker } from "@/components/shared/date-picker";
import { useState } from "react";
import { Button, Input } from "@/components";

export default function Page() {
    const [date, setDate] = useState<any>(new Date());
    return (
        <div className="flex flex-col">
            <Link href={'/link'} className="flex items-center gap-x-1 mb-4">
                <BiChevronLeft className="text-2xl" />
                <h3>Leave Request</h3>
            </Link>
            <form action="" className="flex flex-col gap-y-3">
                <Field>
                    <Label className="text-sm/6 font-medium ">Leave Type</Label>
                    <div className="relative">
                        <Select
                            className={clsx(
                                'mt-۲ block w-full appearance-none rounded-lg border-none bg-background px-3 h-10 text-sm/6 text-secondary',
                                'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
                                // Make the text of each option black on Windows
                                '*:text-black'
                            )}
                        >
                            <option value="active">روزانه</option>
                            <option value="paused">ساعتی</option>
                        </Select>
                        <BiChevronDown
                            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-secondary"
                            aria-hidden="true"
                        />
                    </div>
                </Field>
                <div className="flex items-center justify-between gap-x-3">
                    <CalDatePicker
                        placeholder="From Date"
                        date={date}
                        setDate={setDate}
                    />
                    <CalDatePicker
                        placeholder="To Date"
                        date={date}
                        setDate={setDate}
                    />
                </div>
                <Input
                    name="duration"
                    placeholder="مدت زمان"
                />
                <Button>Submit</Button>
            </form>
        </div>
    )
}