import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import Intern from "./Intern";

function GetInterns()
{
    const [Interns , setInterns] = useState([
        {
            "id": 0,
            "user": "",
            "name": "",
            "dateOfBirth": "",
            "age": 0,
            "gender": "",
            "phone": "",
            "email": ""
        }]
    )

    // var InternsData = ()=>{
    //     fetch("http://localhost:5199/api/User/GetAllInterns",{
    //       "method":"GET",
    //       headers:{
    //           "accept": "text/plain"
    //       },
    //       "body":JSON.stringify({...Interns,"Interns":{} })})
    //  .then(async (data)=>{
        
    //     console.log(data)
    //         var myData = await data.json();
    //         console.log(myData)
    //         setInterns(myData)
    //         console.log(Interns)
    //     }).catch((err)=>{
    //       console.log(err.error)
    //     })
    // }

        useEffect(() => {
        fetch('http://localhost:5199/api/User/GetAllInterns')
           .then((res) => res.json())
           .then((data) => {
              console.log(data);
              setInterns(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
        }, []);

        return (
        <div> <h1>Intern Details</h1>
            {
                Interns.map((intern , idx) =>
            {
                return (<div><Intern p = {intern} key = {idx}/></div>
                    )
            })
            }
        </div>
    )
}

export default GetInterns;