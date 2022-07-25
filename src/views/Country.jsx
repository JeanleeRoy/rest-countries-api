import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import handleUrl from "../utils/countriesApi"

const Country = () => {
    const [country, setCountry] = useState(null)
    const { name } = useParams()

    const fetchCountry = () => {
        fetch(handleUrl(name))
        .then(res => res.json())
        .then(data => {
            setCountry(data[0])
        })
    }

    useEffect(() => {
        fetchCountry()
    }, [])

    return (
        <>
            <p>{country?.name.common} Deatails</p>
        </>
    );
}

export default Country;