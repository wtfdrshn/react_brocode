import React, { useEffect, useRef, useState } from "react";

function Component() {

    const inputRef = useRef(null);

    useEffect(() => {
        console.log("Component mounted");
    });

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.value = "Hello";
        inputRef.current.style.backgroundColor = "lightblue";
    }


    return (
        <div>
            <input ref={inputRef} />
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Component;