/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from "react";
import PageList from "./PageList";
import FilterList from "./FilterList";
import Filter from "./Filter";

export default function IndexPage() {
    const [searchFilter, setSearchFilter] = useState(null)



    return (
        <>
            {
                searchFilter === null ? <PageList /> : <FilterList search={searchFilter}/> 
            }
           <Filter setSearchFilter={setSearchFilter}/>
        </>
    ) 
}