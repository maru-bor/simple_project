import {useState} from "react";




function Counter(){
    const[count, setCount] = useState(0)

    return (
        <>
            <button onClick={() => setCount((count) => count + 1)}> Add 1 </button>

            <button onClick={() => setCount((count) => count - 1)}> Subtract 1</button>

            <div> count is {count}</div>
        </>


    )

}

export default Counter