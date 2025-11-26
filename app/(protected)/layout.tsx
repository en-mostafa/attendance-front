import { SessionProvider } from "@/components/provider/session-provider"

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}