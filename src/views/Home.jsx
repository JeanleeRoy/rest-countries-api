import Filter from "../components/Filter";
import Search from "../components/Search";
import '../assets/styles/home.scss'

const Home = () => {
    return (
        <div className="user-inputs" role="group">
            <div className="search-input">
                <Search />
            </div>
            <div className="filter-input">
                <Filter />
            </div>
        </div>
    )
}

export default Home;