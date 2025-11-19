'use client'
import { LoadingPage } from "@/components";
import { UseGetData } from "@/lib/hooks/useGetData";
import Details from "./Details";

export default function DataOrder({ id }: {id: string}) {
    const { data, isLoading, setMutate } = UseGetData(`/delivery/transport/show?id=${id}`);

    if(isLoading) return <LoadingPage />

    return (
        <Details key={id} data={data} mutate={setMutate}/>
    )
}