import { useEffect, useState } from "react";

export const Clock = () => {
    const [time, setTime] = useState('');
    const valentines = new Date();
    const day = new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(valentines)
    const ampm = valentines.toLocaleTimeString("en-US", { hour12: true }).includes("AM") ? "AM" : "PM";

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const hour = date.getHours().toString();
            const minutes = date.getMinutes().toString();
            const reuslt = `${hour.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
            setTime(reuslt);
        }, 1000);

        return () => clearInterval(intervalId)
    }, [time])
    return (
        <div className=" flex flex-col items-center">
            <div className="text-4xl font-light text-foreground flex items-center gap-x-2 mb-1">
                <span>{ampm}</span>
                {time}
            </div>
            <span className="text-2xs text-secondary">{day}</span>
        </div>
    )
}