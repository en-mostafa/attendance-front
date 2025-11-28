'use server'

import { FormState, leaveSchema } from "@/components/pages/leave/form-schema";
import { apiFetch } from "@/lib/api";
import ValidationsError from "@/lib/exeptions";

export const leaveRequest = async (state: FormState, formData: FormData) => {

    const validateFields = leaveSchema.safeParse({
        type: formData.get("type"),
        startDate: formData.get("startDate"),
        endDate: formData.get("endDate"),
        duration: formData.get("duration"),
    })
    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
        }
    }

    try {
        const res = await apiFetch(`/add/leave`, {
            method: 'POST',
            body: JSON.stringify(validateFields.data)
        });
        return { success: true }
    } catch (err) {
        if (err instanceof ValidationsError) {
            return { error: err.messages.message }
        }
    }
}

export const leaves = async (param: string) => {
    try {
        const { data } = await apiFetch(`/leaves?date=${param}`, {
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
