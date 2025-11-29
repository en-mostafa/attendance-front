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
        const { data } = await apiFetch(`/attendance/history?date=${param}`, {
            method: 'GET',
        });
        return data
    } catch (err) {
        if (err instanceof ValidationsError) {
            return { error: err.messages.message }
        }
    }
}

export const summary = async (param: string) => {
    try {
        const { data } = await apiFetch(`/summary?date=${param}`, {
            method: 'GET',
        });
        return data
    } catch (err) {
        if (err instanceof ValidationsError) {
            return { error: err.messages.message }
        }
        console.log(err)
    }
}