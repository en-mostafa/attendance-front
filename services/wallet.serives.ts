'use server'

import { apiFetch } from "@/lib/api"

export const wallet = async () => {
    try {
        const { data } = await apiFetch('/wallet', {
            method: 'GET',
        });
        return data
    } catch (err) {
        console.log(err)
    }
}