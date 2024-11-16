import { useEffect, useState } from "react"


export const ComponentUseEffect = () => {

    const [state, setState] = useState(false)

    useEffect(() => {
        console.log("Componente Montado");
        return (() => {
            console.log("Componente Desmontado")
        })
    }, [])

    useEffect(() => {
        console.log(state);
    }, [])

    return (
        <div>
            <p>{state ? "El estado es true" : "El estado es false"}</p>
            <button onClick={() => {
                setState(!state)
            }}>Cambiar estado</button>
        </div>
    )
}
