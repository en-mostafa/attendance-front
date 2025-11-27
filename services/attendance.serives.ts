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