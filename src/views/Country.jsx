import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BackBtn from "../components/BackBtn"
import CountryDetail from "../components/CountryDetail"
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
            <BackBtn />
            <br />
            <CountryDetail />
        </>
    );
}

export default Country;