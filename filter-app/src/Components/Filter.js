import React, { useMemo, useState } from "react";

function Filter()
{
    const [threshold , setThreshold] = useState();
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

    const [Person , setPerson] = useState(
        {
            "Name" : "",
            "age" : 0
        }
    )

    var AddData = () => {
        //data.push(Person)
        setData([...data,Person]);
    }

    return (
        <div>
             <label>
                Threshold
            </label>
            <input type="number" onChange={(event) =>
            {
                setThreshold(event.target.value)
            }}></input>
            <label>
                Name
            </label>
            <input type="text" onChange={ (event) => {
                setPerson({...Person,"Name":event.target.value})
            }}>
            </input>
            <label>
                Age
            </label>
            <input type="text" onChange={ (event) => {
                setPerson({...Person,"age":event.target.value})
            }}>
            </input>
            <button onClick={AddData}>Click</button>
           
            {data.filter(p => p.age > threshold).map((val,idx) => {
                return (
                <tr key={idx}>
                    <td>{val.Name}</td>
                    <td>{val.age}</td>
                </tr>

            )
        })
    }</div>
            
    )
}

export default Filter;