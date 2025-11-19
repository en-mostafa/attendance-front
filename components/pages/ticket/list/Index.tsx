'use client'
import PageList from "./PageList";
import FilterList from "./FilterList";
import Filter from "./Filter";
import { useState } from "react";

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