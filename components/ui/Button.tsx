import { ButtonProps } from "@/types";

export default function Button({
    children,
    onClick,
    type = 'submit',
    buttonClass,
    disabled
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-full bg-primary flex justify-center items-center text-white block rounded-lg h-10 z-[30] mt-4 ${buttonClass}`}
            disabled={disabled}>
            {children}
        </button>
    )
}