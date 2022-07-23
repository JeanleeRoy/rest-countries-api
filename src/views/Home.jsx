import Filter from "../components/Filter";
import Search from "../components/Search";
import Card from "../components/Card";
import '../assets/styles/home.scss'

const Home = () => {
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
                <Card />
            </div>
        </>

    )
}

export default Home;