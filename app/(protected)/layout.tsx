import { LoadingPage } from "@/components"
import { SessionProvider } from "@/components/provider/session-provider"
import { Suspense } from "react"

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <SessionProvider>
            <Suspense fallback={<LoadingPage />}>
                {children}
            </Suspense>
        </SessionProvider>
    )
}