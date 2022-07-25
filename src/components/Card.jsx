import { Link } from "react-router-dom"
import '../assets/styles/components/card.scss'

const Card = ({ country }) => {
    return (
        <Link to={`country/${country.name.common}`} className="country-card">
            <div className="country-image">
                <img src={country.flags.png} alt="country" />
            </div>
            <div className="country-description">
                <h2>{country.name.common}</h2>
                <div className="country-detail">
                    <p><b className='strong'>
                        Population:</b> {country.population.toLocaleString('en-US')}
                    </p>
                    <p><b className='strong'>Region:</b> {country.region}</p>
                    <p><b className='strong'>Capital:</b> {country.capital}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card;