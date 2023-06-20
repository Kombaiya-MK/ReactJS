import React from "react";
import { useNavigate } from "react-router-dom";

function Home()
{
    const navigate = useNavigate();
    var goToData = () => {
        navigate('/Register')
    }
    
    return(<div>

        <h1>
            Home
        </h1>
        <h2>
            <button className="btn btn-primary" onClick={goToData}>Go to data</button>
        </h2>
    </div>)
}

export default Home;