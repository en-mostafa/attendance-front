'use client'

import { UseGetData } from "@/lib/hooks/useGetData"
import LoadingPage from "@/components/ui/LoadingPage"
import HeaderChat from "./Header";
import Messages from "./Messages";
import FooterChat from "./Footer";

export default function IndexPage({ id } : { id: string }) {
    const { data, isLoading, setMutate } = UseGetData(`/delivery/ticket/message?id=${id}`);

    if(isLoading) return <LoadingPage />

    return (
        <div>
            <HeaderChat data={data}/>
            <Messages data={data}/>
            <FooterChat id={data.id} setMutate={setMutate}/>
        </div>
    )
}