import { useContext } from "react";
import { COUNTER_CONTEXT } from "../context/Context";


const CaseTwo = () => {
    const { count, setCount } = useContext(COUNTER_CONTEXT);

    return (
        <div>
            <h1>Case Two</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Increment</button>
        </div>
    );
};

export default CaseTwo;