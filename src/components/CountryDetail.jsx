import '../assets/styles/components/countryDetail.scss'

const CountryDetail = () => {
    return ( 
        <div className="country-detail-container">
            <div className="flag">
                <img src="https://flagcdn.com/w320/be.png" alt="country flag" />
            </div>
            <div className="description">
                <h2>Belgium</h2><br />

                <div className="detail">
                    <div>
                        <p><b>Native Name:</b> Belgié</p>
                        <p><b>Population:</b> 11,319,511</p>
                        <p><b>Region:</b> Europe</p>
                        <p><b>Sub Region:</b> Western Europe</p>
                        <p><b>Capital:</b> Brussels</p>
                        <br />
                    </div>
                    <div>
                        <p><b>Top Level Domain:</b> .be</p>
                        <p><b>Currencies:</b> Euro</p>
                        <p><b>Languages:</b> Dutch, French, German</p>
                        <br />
                    </div>
                </div>

                <div className="borders">
                    <p>Border Countries</p>
                    <div className="tags">
                        <span className="border-tag">France</span>
                        <span className="border-tag">Germany</span>
                        <span className="border-tag">Netherlands</span>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default CountryDetail;