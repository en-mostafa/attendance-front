'use client'
import { InputProps } from "@/types";
import { useState } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";

export default function Input({ isPassword, type = "text", ...props }: InputProps) {
    const [showText, setShowText] = useState(false);

    return (
        <div className={`flex flex-col relative ${props.containerClass}`}>
            <label htmlFor={props.name} className="label mb-1">{props.label}</label>
            <input
                type={showText ? "text" : type}
                {...props}
                className={`h-10 placeholder:text-xs placeholder:text-muted-foreground w-full rounded-[6px] bg-background px-4 focus:border focus:border-secondary-foreground focus:outline-none ${props.inputclass}`}
            />
            {isPassword && (
                <button
                    type="button"
                    className="absolute left-2 top-4.5"
                    onClick={() => setShowText(!showText)}
                >
                    {!showText
                        ? <BiHide className="text-xl" />
                        : <BiShowAlt className="text-xl" />
                    }
                </button>
            )}
        </div>
    )
}