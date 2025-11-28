'use server'

import { apiFetch } from "@/lib/api";
import ValidationsError from "@/lib/exeptions";

export const profile = async () => {
    try {
        const { data } = await apiFetch('/profile', {
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