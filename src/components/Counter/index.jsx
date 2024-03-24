import React from "react";

import { myPromise } from "../../kUtils/myPromise";

const Counter = () => {
    const [count, setCount] = React.useState(0);
    
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    React.useEffect(() => {
        console.log('Counter useEffect called')
        document.title = `Current Count: ${count}`;
        // setCount((count) => count + 1);
    })

    React.useEffect(() => {
        async function fetchData() {
            try {
                const result = await myPromise();            
                console.log(result)
                console.log("result instanceof Error")
            } catch (e) {
                console.log(e)
            }
        }
        fetchData();
    }, [])
    
    return (
        <div>
            <h1>Counter</h1>
            <p>Current Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
