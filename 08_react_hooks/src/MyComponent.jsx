import React, { useState } from 'react';

function MyComponent() {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const handleNameChange = () => {
        setName("Darshan");
    }

    const handleAgeChange = () => {
        setAge(age + 1);
    }

    const handleEmploymentChange = () => {
        setIsEmployed(!isEmployed);
    }


    return (
        <>
            <p>Name: {name}</p>
            <button onClick={handleNameChange}>Change Name</button>
            <hr />
            <p>Age: {age}</p>
            <button onClick={handleAgeChange}>Change Age</button>
            <hr />
            <p>Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={handleEmploymentChange}>Change Employment</button>
        </>
    )
}

export default MyComponent;