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
    defaultValue?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isPassword?: boolean
}

export interface TextareaProps {
    name: string,
    value?: string,
    placeholder: string,
    CustomClass?: string,
    label?: string,
    rows: number,
    cols: number,
    containerClass?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    readOnly?: boolean
    defaultValue?: string
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
    totalWorkedTime: string | null
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

export type LeaveLog = {
    id: number;
    userId: number;
    startDate: string;    // تاریخ به صورت شمسی (Jalali)
    endDate: string;      // تاریخ به صورت شمسی (Jalali)
    duration: string;     // مدت زمان به صورت رشته
    reason: string | null;
    type: "DAILY" | "HOURLY" | string | null;  // اگر enum داری می‌توان محدود کرد
    status: "PENDING" | "APPROVED" | "REJECTED" | string;
    approvedBy: number | null;
    approvedDate: string | null; // ISO datetime
    createAt: string;     // ISO datetime
    updatedAt: string;    // ISO datetime
};

export enum LeaveStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}

export interface User {
    id: number;
    name: string;
    family: string;
    phone: string;
    nationalCode: string;
}

export interface SummaryLog {
    id: number,
    totalHours: number,
    totalOvertime: number,
    totalSalary: number,
    totalHolidayWork: number,
    totalDelayTime: number,
    totalAbsent: number
}

export interface Transaction {
    id: number,
    image: string,
    amount: string,
    description: string,
    date: string,
}

export interface Notification {
    id: number,
    title: string,
    description: string,
    read: boolean,
    createAt: string
}