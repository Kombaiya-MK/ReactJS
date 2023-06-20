import React from "react";

function Intern(props)
{
    return (
        <div >
            <br/><br/>
            Intern ID : {props.p.id}
            <br/>
            Intern Name : {props.p.name}
            <br/>
            Intern DOB : {props.p.dateOfBirth}
            <br/>
            Intern Age : {props.p.age}
            <br/>
            Intern Gender : {props.p.gender}
            <br/>
            Intern Phone : {props.p.phone}
            <br/>
            Intern Email :{props.p.email}
            <br/>
        </div>
    )
}

export default Intern;