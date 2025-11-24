'use client'

import { useState } from 'react';
import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/colors/red.css"

export const Calender = () => {
    const [value, setValue] = useState<any>(new Date())

    return (
        <Calendar
            value={value}
            onChange={setValue}
            calendar={persian}
            locale={persian_fa}
            className='red custom-calendar'
        />
    );
}