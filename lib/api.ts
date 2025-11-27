/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect } from "next/navigation";
import ValidationsError from "./exeptions";
import { getSession, removeSession } from "./session";

/**
 * apiFetch - universal fetch for dev/prod that prefixes API calls with the correct base URL
 *
 * Usage:
 *   apiFetch('/users', { method: 'GET' })
 *   apiFetch('https://external.com/endpoint') // untouched
*/
export const apiFetch = async (input: string, init?: RequestInit): Promise<any> => {
    const session = await getSession()
    const url = process.env.NEXT_PUBLIC_API_BACKEND_URL + "/api/user" + input;
    const headers: HeadersInit = {
        Authorization: `Bearer ${session?.user.token}`,
        Accept: 'application/json',
        ...(init?.body && !(init.body instanceof FormData)
            ? { "Content-Type": "application/json" }
            : {}),
        ...init?.headers,
    }

    const response = await fetch(url, {
        ...init,
        headers
    })
    const data = await response.json();
    if (!response.ok) {
        if (response.status === 400) {
            throw new ValidationsError(data?.errors)
        }
        if (response.status === 422) {
            throw new ValidationsError({ "message": data?.error })
        }
        if (response.status === 401) {
            await removeSession();
            redirect('/signin')
        }
        throw new Error(data?.message || "API request failed");
    }

    return data;
}

