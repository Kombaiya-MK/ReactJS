import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import './Login.css'
import GetInterns from "./GetInterns";
import { Navigate } from "react-router-dom";


function Login()
{
    const [User , setUser] = useState(
        {
        "UserId" :0,
        "Password":"",
        "Role":"",
        "Token":""
        }
        
    );

    var Login = () => {
        console.log(User)
        console.log("hello")
        fetch("http://localhost:5199/api/User/Login" ,{
            "method":"POST",
            headers:{
                "accept": "text/plain",
                "Content-Type": "application/json"
            },
            "body":JSON.stringify({...User,"User":{} })})
            .then(async (data)=>{
                     var myData = await data.json();
                     console.log(myData);
                     alert("Welcome " + myData.role);
                     Navigate("/GetInterns")
               }).catch((err)=>{
                 console.log(err.error)
        })
    }
    return (
        <div>
            <label className="form-control Login label">User ID</label>
            <input type="number" className="form-control Login " placeholder="Enter ID...." onChange={(event)=>{
                setUser({...User,"UserId":event.target.value})
            }} />
            <label  className="form-control Login label">Password</label>
            <input type="text" className="form-control Login" placeholder="Enter Password...." onChange={(event)=>{
                setUser({...User,"Password":event.target.value})
            }} />
            <button onClick={Login} className="btn btn-success">Login</button>
        </div>
    )
}

export default Login;