'use server'

import { apiFetch } from "@/lib/api";
import ValidationsError from "@/lib/exeptions";

export const transaction = async (param: string) => {
    try {
        const { data } = await apiFetch(`/transaction/log?date=${param}`, {
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