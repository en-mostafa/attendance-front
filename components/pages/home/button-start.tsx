import { useCallback, useState } from "react"
import { BiPowerOff } from "react-icons/bi"

export const ButtonStart = () => {
    const [start, setStart] = useState(false);
    const playSound = () => {
        setStart(!start);
        const audio = new Audio("/sounds/click.mp3");
        audio.play();
    }
    const shadow = `fill-green-500 drop-shadow-md drop-shadow-green-500/30`
    return (
        <div className="flex flex-col items-center mt-5" onClick={playSound}>
            <div
                className={`flex items-center rounded-full justify-center border w-32 mx-auto h-32 ${start ? `border-success ${shadow}` : 'border-destructive'}`}>
                <div
                    className={` text-white w-20 h-20  flex items-center justify-center rounded-full ${start ? `bg-green ${shadow}` : 'bg-destructive'}`}>
                    <BiPowerOff className="text-2xl" />
                </div>
            </div>
            {start ? (
                <h2 className="text-green mt-2">شروع شیفت</h2>
            ) : (
                <h2 className="text-destructive mt-2">پایان شیفت</h2>
            )}
        </div>
    )
}