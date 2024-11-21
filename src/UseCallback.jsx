import React, { useState, useCallback } from 'react';

function UseCallbackExample() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('Hello');

    // Use useCallback to memoize the increment function
    // const increment = useCallback(() => {
    //     console.log('Increment function called');
    //     setCount(count + 1);
    // }, [count]); // Dependency is `count`, so `increment` will be recreated only when `count` changes

    const increment=()=>{
        console.log('Increment function called');
        setCount(count + 1);
    }

    const updateText = () => {
        console.log('Text updated');
        setText('Updated Text');
    };

    return (
        <div>
            <h1>useCallback Hook Example</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment Count</button>
            <br />
            <p>Text: {text}</p>
            <button onClick={updateText}>Update Text</button>
        </div>
    );
}

export default UseCallbackExample;
