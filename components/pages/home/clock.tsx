import { useEffect, useState } from "react";

export const Clock = () => {
    const [time, setTime] = useState('');
    const valentines = new Date();
    const day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(valentines)

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const hour = date.getHours().toString();
            const minutes = date.getMinutes().toString();
            const second = date.getSeconds().toString();
            const reuslt = `${hour.padStart(2, "0")}:${minutes.padStart(2, "0")}:${second.padStart(2, "0")}`;
            setTime(reuslt);
        }, 1000);

        return () => clearInterval(intervalId)
    }, [time])
    return (
        <div className="text-xl font-medium flex flex-col items-end">
            {time}
            <span>{day}</span>
        </div>
    )
}