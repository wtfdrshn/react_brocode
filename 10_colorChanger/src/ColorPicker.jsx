import { useState } from 'react';

function ColorChanger() {

    const [color, setColor] = useState('#ffffff');  

    return (
        <div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="">Select a Color: </label>
            <input 
                type="color" 
                value={color} 
                onChange={(e) => setColor(e.target.value)}>

            </input>
        </div>
    )
}

export default ColorChanger;