import { AuthProvider } from "@/components/provider/auth-provider"

export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <AuthProvider>
            <section>{children}</section>
        </AuthProvider>
    )
}