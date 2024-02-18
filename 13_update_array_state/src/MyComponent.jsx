import React, { useState } from 'react';

function MyComponent() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    function handleAddCar() {
        const newCar = { year: carYear, make: carMake, model: carModel };

        setCars(c => [...c, newCar]);
        setCarMake('')
        setCarModel('')
        setCarYear(new Date().getFullYear())
    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((car, i) => i !== index));
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value)
    }

    function handleYearChange(event) {
        setCarYear(event.target.value)
    }

    function handleModelChange(event) {
        setCarModel(event.target.value)
    }

    return (<div>
        <h2>List of Car Objects</h2>
        <ul>
            {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model} </li>)}
        </ul>

        <input type="number" value={carYear} onChange={handleYearChange} />
        <br />
        <input type="text" placeholder='Enter car maker' value={carMake} onChange={handleMakeChange} />
        <br />
        <input type="text" placeholder='Enter car model' value={carModel} onChange={handleModelChange} />
        <br />
        <button onClick={handleAddCar}>Add Car</button>
    </div>)
} 

export default MyComponent;