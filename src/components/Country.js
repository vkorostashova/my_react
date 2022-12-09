import React from "react";

function Country({country}) {
    return <tr >
        <td>{country.name}</td>
        <td>{country.capital}</td>
        <td>{country.region}</td>
        <td>{country.population}</td>
        <td>{country.area}</td>
    </tr>
}

export default Country;