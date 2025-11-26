'use client'
import { useEffect, useState } from "react"

export const PersianDate = () => {
    const [date, setDate] = useState("");
    useEffect(() => {
        const d = new Date();
        const formater = new Intl.DateTimeFormat("Fa-IR", {
            weekday: "long",
            day: "numeric",
            month: "long"
        });
        setDate(formater.format(d) + "ماه")
    }, [])
    return (
        <span className="text-2xs text-secondary mt-1">{date}</span>
    )
}