'use server'

import { apiFetch } from "@/lib/api"
import ValidationsError from "@/lib/exeptions"
import { setSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const signin = async (state: any, formData: FormData) => {
    const parseData = {
        phone: formData.get("phone"),
        password: formData.get("password")
    }
    try {
        const res = await apiFetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify(parseData)
        });
        await setSession(res.data.access_token)
    } catch (err) {
        if (err instanceof ValidationsError) {
            return { errors: err.messages }
        }
        console.log(err)
    }
    redirect('/')
}