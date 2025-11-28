/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'reset' | 'submit' | undefined;
    buttonClass?: string;
    onClick?: () => void;
    disabled?: boolean
}

export interface InputProps {
    type?: string,
    name: string,
    value?: string,
    placeholder: string,
    inputClass?: string,
    label?: string,
    readOnly?: boolean,
    containerClass?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isPassword?: boolean
}

export interface TextareaProps {
    name: string,
    value: string,
    placeholder: string,
    CustomClass?: string,
    label?: string,
    rows: number,
    cols: number,
    containerClass?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    readOnly?: boolean
}
export interface ModalProps {
    title?: string,
    buttonElement: any,
    btnClass?: string,
    children: React.ReactNode
}

export interface History {
    id: number,
    date: string,
    checkIn: string,
    checkOut: string,
}

export interface AttendanceHistoryItem {
    id: number;
    userId: number;
    date: string;           // "1404-09-07"
    checkIn: string | null; // "11:55"
    checkOut: string | null;
    workedHours: string | null;
    overTime: string | null;
    delayTime: string | null;
    isHoliday: boolean;
    status: "PRESENT" | "ABSENT" | "HOLIDAY" | string; // edit if needed
    ipAddress: string | null;
    createdAt: string;
    updatedAt: string;
}
