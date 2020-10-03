import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';



const Services = () => {
    const { first } = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(location);

    return (
        <>
            {location.pathname === `/Services/` ? 
            <h3>My Services name is {first}</h3> :
                <button onClick={() => {
                    history.push(`/Services/`)
                }}>Back</button>}
            {location.pathname === `/Services/amanpuri` ? <div><button onClick={() => {
                alert(`My current location is ${location.pathname}`);
            }}>Click me</button>
                <button onClick={() => {
                    history.push(`/Services/aman`)
                }}>Back</button> </div> : <p>My current location is {location.pathname}</p>}
        </>
    );
};

export default Services;