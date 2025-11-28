import { SessionProvider } from "@/components/provider/session-provider"
import { Suspense } from "react"

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <SessionProvider>
            <Suspense fallback={'loading ...'}>
                {children}
            </Suspense>
        </SessionProvider>
    )
}