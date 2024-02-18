import { useState, useEffect } from 'react'

function MyComponent() {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');

  useEffect(() => {
    document.title = `You clicked ${count} times | Color: ${color}`
  }, [count, color]);

    function handleAddCount() {
        setCount(c=> c + 1);
    };

    function handleSubtractCount() {
        setCount(c=> c - 1);
    }

    function handleColorChange() {
        setColor(color === 'green' ? 'red' : 'green');
    }

  return (
    <div>
      <p style={{color}}>Count: {count}</p>

      <button onClick={() => handleAddCount()}>Add Count</button>
        <button onClick={() => handleSubtractCount()}>Subtract Count</button>
        <br />
        <button onClick={() => handleColorChange()}>Change Color</button>
    </div>
  )
}

export default MyComponent;