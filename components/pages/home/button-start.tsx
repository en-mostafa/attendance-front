import Image from "next/image";
import PunchIn from "@/public/punchIn.svg"
import { useState } from "react";

export const ButtonStart = () => {
    const [start, setStart] = useState(false);
    const playSound = () => {
        setStart(!start);
        const audio = new Audio("/sounds/click.mp3");
        audio.play();
    }
    const shadow = `fill-green-500 drop-shadow-md drop-shadow-green-500/30`

    return (
        <div className="flex flex-col bg-muted mx-auto w-56 h-56 rounded-full items-center mt-10" onClick={playSound}>
            <div className="bg-background/50 w-4/5 h-4/5 m-auto rounded-full flex items-center justify-center p-3">
                <div className="bg-linear-to-r from-[#E4E7ED] to-[#FFFFFF] to-90% rounded-full gap-y-2 w-full h-full flex flex-col items-center justify-center">
                    <Image
                        src={PunchIn}
                        alt="punch"
                    />
                    <span>PUNCH IN</span>
                </div>
            </div>
        </div>
    )
}