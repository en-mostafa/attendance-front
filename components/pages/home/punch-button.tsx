'use client'
import Image from "next/image";
import PunchIn from "@/public/punchIn.svg"
import PunchOut from "@/public/punchOut.svg"
import { startTransition, useActionState, useEffect, useState } from "react";
import { registerAttendance } from "@/services/attendance.serives";
import { toast } from "sonner";
import { AttendanceHistoryItem } from "@/types";

export const PunchButton = ({ attendance }: { attendance: AttendanceHistoryItem }) => {
    const isCheckIn = !attendance.checkOut ? true : false;
    const [punch, setPunch] = useState(isCheckIn);
    const [state, action, pending] = useActionState(registerAttendance, null);

    useEffect(() => {
        if (state?.success) {
            playSound()
        } else if (state?.error) {
            toast.error(state.error)
        }
    }, [state])

    const playSound = () => {
        setPunch(!punch);
        const audio = new Audio("/sounds/click.mp3");
        audio.play();
    }

    const handleSubmit = () => {
        const url = !punch ? '/check-in' : `/check-out?id=${attendance.id}`;
        startTransition(() => action(url));
    }

    return (
        <button
            disabled={pending}
            className={`flex flex-col mx-auto w-56 h-56 rounded-full items-center mt-10 ${punch ? 'bg-success' : 'bg-muted'}`}
            onClick={handleSubmit}
        >
            <div className="bg-background/50 w-4/5 h-4/5 m-auto rounded-full flex items-center justify-center p-3">
                <div className="bg-linear-to-r from-[#E4E7ED] to-[#FFFFFF] to-90% rounded-full gap-y-2 w-full h-full flex flex-col items-center justify-center">
                    <Image
                        src={!punch ? PunchIn : PunchOut}
                        alt="punch"
                    />
                    <span className="text-xs">PUNCH {punch ? 'Out' : 'IN'}</span>
                </div>
            </div>
        </button>
    )
}