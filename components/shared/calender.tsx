'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/colors/red.css"

export const Calender = () => {
    const [value, setValue] = useState<any>(new Date());
    const router = useRouter();

    const handleChange = (val: any) => {
        setValue(val)
        router.push(`/history?date=${val}`)
    }

    return (
        <Calendar
            value={value}
            onChange={(_val) => handleChange(_val)}
            calendar={persian}
            locale={persian_fa}
            format='YYYY-MM-DD'
            className='red custom-calendar'
        />
    );
}