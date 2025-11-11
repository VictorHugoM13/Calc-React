import React, {useState} from "react";

function IncDec() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Estado: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
        </div>
    );
}

export default IncDec;