import React, { useEffect, useState } from "react";
import Country from "./Country";

function Countries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all').then(res => res.json()).then(data => {
            setCountries(data.map(country => ({
                name: country.name,
                capital: country.capital,
                region: country.region,
                population: country.population,
                area: country.area,
                alpha3Code: country.alpha3Code,
            })));
        });
    }, [])

    return <table>
        <thead>
            <tr><th>Name</th><th>Capital</th><th>Region</th><th>Population</th><th>Area</th></tr>
        </thead>
        <tbody>
            {countries.map(country => <Country
                country={country}
                key={country.alpha3Code} />)}
        </tbody>
    </table>
}
export default Countries;