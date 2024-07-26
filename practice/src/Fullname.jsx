import React, { useState } from "react";

function FullnameComponent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function getFullName() {
        return `${firstName} ${lastName}`;
    }

    return(
        <div>
            <h1>Full name</h1>
            <input 
            type="text"
            placeholder="Enter your firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} 
            />
            <input 
            type="text"
            placeholder="Enter your lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} 
            />
            <p>{getFullName()}</p>
        </div>
    )
}

export default FullnameComponent;