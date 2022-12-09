import React, { useState } from "react";

function Button() {
    const [count, setCount] = useState(0);

    function changeCount() {
        setCount(count + 1);
    }


    return <button onClick={changeCount}>Click here {count}</button>


}
export default Button;