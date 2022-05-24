import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { users } from "../utils/queries";

export const H = ({name}) => {
    console.log("in child comp")
    const {loading,data} = useQuery(users);
    const [dataDB, setDataDb] = useState([])
    useEffect(() => {
        console.log("rendered")
        loading ? (console.log()) : (
            setDataDb(data)
        )
    },[data])

    return (
        
        <div className="border border-light p-2 w-75">
            {    console.log("in child componenet")
}
            <h2>RESULTS:</h2>
            {loading ? (
                <>loading</>
            ) : (
                    dataDB.length != 0 ? (
                        
                        <div>   
                            {
                                dataDB['Users'].map(d => {
                                
                                    return <>
                                        <h4>{d.firstName } thinks {d.friend} is  {d.personality} {}</h4>
                                    </>
                                    
                                })
                                }
                        </div>
                    
                    ):(console.log("empty data"))
            )}
        </div>

    )
}

export const MemoizedChild = React.memo(H)
