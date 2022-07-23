import { useEffect, useState } from "react";
import handleUrl from "../utils/countriesApi";

import Filter from "../components/Filter";
import Search from "../components/Search";
import Card from "../components/Card";
import '../assets/styles/home.scss'

const Home = () => {
    const [countryName, setCountryName] = useState('')
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch(handleUrl(countryName,true))
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [countryName])

    return (
        <>
            <div className="user-inputs" role="group">
                <div className="search-input">
                    <Search />
                </div>
                <div className="filter-input">
                    <Filter />
                </div>
            </div>
            <div className="countries">
                {
                    countries && countries.map(country => (
                        <Card country={country} key={country.name.common} />
                    ))
                }
            </div>
        </>

    )
}

export default Home;