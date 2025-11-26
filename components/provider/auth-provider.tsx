import { getSession } from "@/lib/session"
import { redirect } from "next/navigation";

export const AuthProvider = async ({
    children
}: {
    children: React.ReactNode
}) => {
    const token = await getSession();
    if (token) {
        redirect("/")
    }
    return children
}