'use server'

import { apiFetch } from "@/lib/api"

export const dashboard = async () => {
    try {
        const { data } = await apiFetch('/dashboard', {
            method: 'GET',
        });
        return data
    } catch (err) {
        console.log(err)
    }
}