import React, { useState } from "react";

function Filter()
{

    const [data , setData] = useState(
        [
        {
            "Name" : "abc",
            "age" : 22
        },
        {
            "Name" : "MK",
            "age" : 87
        },
        {
            "Name" : "Kishore",
            "age" : 21
        },
        {
            "Name" : "Mathan",
            "age" : 12
        },
        {
            "Name" : "Ajay",
            "age" : 52
        },
        {
            "Name" : "Sandhosh",
            "age" : 69
        }
    ]
    );
    return (
            data.map((val,idx) => {
                return (<div key={idx}>{val}</div>)}
            )
    )
}

export default Filter;