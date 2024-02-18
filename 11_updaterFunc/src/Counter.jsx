import { useState } from "react";

function Counter() {
    
        const [count, setCount] = useState(0);
    
        const handleIncrement = () => {
            // In this case, the count is incremented by 2 instead of 1.
            setCount(c => c + 1);
            setCount(c => c + 1);

        }
    
        const handleDecrement = () => {
            // In this case, the count is decremented by 1.
            setCount(c => c - 1);
        }

        const handleReset = () => {
            // setCount(0);
            setCount(c => c = 0);
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