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
            className={`w-full bg-primary justify-center items-center text-white block rounded-[6px] h-10 text-sm ${buttonClass}`}
            disabled={disabled}>
            {children}
        </button>
    )
}