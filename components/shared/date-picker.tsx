'use client'

import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/colors/red.css"

export const CalDatePicker = ({
    placeholder,
    date,
    setDate
}: {
    placeholder: string,
    date: any,
    setDate: any
}) => {

    return (
        <div className="w-full" style={{ direction: "rtl" }}>
            <DatePicker
                value={date}
                onChange={setDate}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-left"
                inputClass='bg-background w-full h-10 rounded-lg px-3 !flex text-left'
                placeholder={placeholder}
                containerClassName="!flex"
                className='red'
            />
        </div>
    );
}