'use server'

import { apiFetch } from "@/lib/api";
import ValidationsError from "@/lib/exeptions";

export const registerAttendance = async (state: any, url: string) => {
    try {
        const res = await apiFetch(`/attendance${url}`, {
            method: 'POST',
        });
        return { success: true }
    } catch (err) {
        if (err instanceof ValidationsError) {
            return { error: err.messages.message }
        }
    }
}

export const history = async (param: any) => {
    try {
        const { data } = await apiFetch(`/attendance/history`, {
            method: 'GET',
        });
        return data
    } catch (err) {
        console.log(err)
    }
}