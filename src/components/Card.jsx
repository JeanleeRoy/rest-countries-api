import '../assets/styles/components/card.scss'

const Card = ({country}) => {
    return ( 
        <div className="country-card">
            <div className="country-image">
                <img src="https://flagcdn.com/w320/de.png" alt="country" />
            </div>
            <div className="country-description">
                <h2>Germany</h2>
                <div className="country-detail">
                    <p><b className='strong'>Population:</b> 81,770,900</p>
                    <p><b className='strong'>Region:</b> Europe</p>
                    <p><b className='strong'>Capital:</b> Berlin</p>
                </div>
            </div>
        </div>
     )
}
 
export default Card;