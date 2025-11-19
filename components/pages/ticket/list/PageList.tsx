/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useInfiniteScroll } from "@/lib/hooks/useInfiniteScroll";
import ListItems from "./ListItems";
import Loader from "@/components/ui/Loader";
import BoxNoData from "@/components/shared/BoxNoData";
import useListGetData from "@/lib/hooks/useListGetData";

export default function PageList() {
    const { data, size, setSize, isLoading } = useListGetData('/delivery/ticket/list?')

    const issues: any[] = data ? [].concat(...data) : [];
    const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
    const isEmpty = issues[0]?.data.length === 0;
    useInfiniteScroll({isEmpty,data,isLoadingMore,setSize,size})

    return (
        <>
            {
                isEmpty ? <BoxNoData /> : !isLoadingMore && (
                    <ListItems data={issues}/>
                )
            }
            { isLoadingMore && <Loader /> }
        </>
    ) 
}