'use client'
import Link from "next/link";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { Field, Label, Select } from '@headlessui/react'
import clsx from 'clsx'
import { CalDatePicker } from "@/components/shared/date-picker";
import { useActionState, useEffect, useState } from "react";
import { Button, Input } from "@/components";
import { leaveRequest } from "@/services/leave.services";
import { ClipLoader } from "react-spinners";
import { jalali } from "@/lib/jalali-date";
import { toast } from "sonner";


export default function Page() {
    const [startDate, setStartDate] = useState<any>();
    const [endDate, setEndDate] = useState<any>();
    const [state, action, pending] = useActionState(leaveRequest, undefined);
    const Tstart = jalali(startDate);
    const Tend = jalali(endDate);

    useEffect(() => {
        if (state?.success) {
            toast.success('با موفقیت ثبت شد')
        } else if (state?.error) {
            toast.error(state.error)
        }
    }, [state])

    return (
        <div className="flex flex-col">
            <Link href={'/link'} className="flex items-center gap-x-1 mb-4">
                <BiChevronRight className="text-2xl" />
                <h3>Leave Request</h3>
            </Link>
            <form action={action} className="flex flex-col gap-y-3">
                <input type="hidden" name="startDate" defaultValue={startDate ? String(Tstart) : ""} />
                <input type="hidden" name="endDate" defaultValue={endDate ? String(Tend) : ""} />
                <Field>
                    <Label className="text-sm/6 font-medium ">Leave Type</Label>
                    <div className="relative">
                        <Select
                            name="type"
                            className={clsx(
                                'mt-۲ block w-full appearance-none rounded-lg border-none bg-background px-3 h-10 text-sm/6 text-secondary',
                                'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
                                // Make the text of each option black on Windows
                                '*:text-black'
                            )}
                        >
                            <option value="DAILY">روزانه</option>
                            <option value="HOURLY">ساعتی</option>
                        </Select>
                        <BiChevronDown
                            className="group pointer-events-none absolute top-2.5 left-2.5 size-4 fill-secondary"
                            aria-hidden="true"
                        />
                    </div>
                </Field>
                {state?.errors?.type && <p className="text-xs text-destructive">{state.errors.type}</p>}

                <div className="flex items-center justify-between gap-x-3">
                    <CalDatePicker
                        placeholder="From Date"
                        date={startDate}
                        setDate={setStartDate}
                    />
                    <CalDatePicker
                        placeholder="To Date"
                        date={endDate}
                        setDate={setEndDate}
                    />
                </div>
                {state?.errors?.startDate && <p className="text-xs text-destructive">{state.errors.startDate}</p>}
                {state?.errors?.endDate && <p className="text-xs text-destructive">{state.errors.endDate}</p>}

                <Input
                    label="Duration"
                    name="duration"
                    placeholder="مدت زمان"
                />
                {state?.errors?.duration && <p className="text-xs text-destructive">{state.errors.duration}</p>}

                <Button type="submit" disabled={pending} buttonClass="flex gap-x-2 mt-2">
                    <ClipLoader
                        loading={pending}
                        color="#ffffff"
                        size={15}
                    />
                    ثبت
                </Button>
            </form>
        </div>
    )
}