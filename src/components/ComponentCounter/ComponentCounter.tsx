import { useState } from "react"

export const ComponentCounter = () => {
    const [counter, setCounter] = useState<number>(0)

    const incrementCounter = () => {
        setCounter((prev) => prev + 1)
    }

    const decrementCounter = () => {
        if (counter > 0) {
            setCounter((prev) => prev - 1)
        }
    }
    return (
        <>
            <h2>Valor de counter: {counter}</h2>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
        </>
    )
}
