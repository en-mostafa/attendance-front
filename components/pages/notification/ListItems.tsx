/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotificationProps } from "@/lib/types";
import Item from "./Item";

export default function ListItems({ data , setMutate} : { data : NotificationProps[], setMutate: any }) {
    return (
        <ul className="m-4 rounded-md border">
            {
                data?.map((issue: any) => 
                        issue.data.map((item: any) => (
                        <Item key={item.id} item={item} setMutate={setMutate}/>
                    ))
                )
            }
        </ul>
    )
}