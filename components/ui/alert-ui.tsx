
export const Alert = ({
    errors
}: {
    errors?: Record<string, string[]>
}) => {
    if (!errors) return;

    return (
        <div className="flex p-4 mb-4 text-sm text-destructive rounded-base bg-destructive/10 border border-destructive rounded-md" role="alert">
            <svg className="w-4 h-4 me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            <span className="sr-only">Danger</span>
            <div>
                <span className="font-medium">خطا در انجام عملیات:</span>
                <ul className="mt-2 list-disc list-outside space-y-1 ps-2.5">
                    {Object.entries(errors).map(([key, messages], i) =>
                        <li key={i}>{messages}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}