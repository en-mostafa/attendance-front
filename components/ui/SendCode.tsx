'use client'
import { useEffect, useState } from "react"

export default function SendCode({ handleResendCode }: {handleResendCode: () => void}) {
    const [second, setSecond] = useState(120);
    
    useEffect(() => {
        if(second <= 0) {
            setSecond(0)
            return;
        }
        const interval = setInterval(() => {
            setSecond(second => second - 1);
        }, 1000);
        return () => clearInterval(interval)
    }, [second]);
   const timer = `${String(second % 60).padStart(2, '0')} : ${Math.floor(second / 60)}`;
   
    const handleClick = () => {
        setSecond(120)
        handleResendCode()
    }

    return (
        <>
            {
                second === 0 ? (
                    <button type="button" className="absolute left-0 top-0 text-sky-500" onClick={handleClick}>ارسال کد مجدد</button>
                ) : (
                    <span className="absolute left-0 top-0 text-sky-500">{timer}</span>
                )
            }
        </>
    )
}