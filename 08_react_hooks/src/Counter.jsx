import { useState } from "react";

function Counter() {
    
        const [count, setCount] = useState(0);
    
        const handleIncrement = () => {
            setCount(count + 1);
        }
    
        const handleDecrement = () => {
            setCount(count - 1);
        }

        const handleReset = () => {
            setCount(0);
        }
    
        return (
            <div className="container"> 
                <div className="counter">
                    <p>Count: {count}</p>
                </div>
                <div className="buttons">
                    <button onClick={handleDecrement}>-</button>
                    <button onClick={handleReset}>RESET</button>
                    <button onClick={handleIncrement}>+</button>
                </div>
            </div>
        )
}

export default Counter;