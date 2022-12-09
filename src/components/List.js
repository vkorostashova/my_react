import React, { useLayoutEffect } from "react";
import Button from "./Button";

function List() {
    const data = ['Bread', 'Butter', 'Milk', 'Cheese'];

    function handelClick(e) {
        console.log(e.currentTarget.innerText);
    }

    return <>
        <ul>
            {data.map(el => <li key={el} onClick={handelClick}>{el}</li>)}
        </ul>
        <Button />
    </>
}

export default List;