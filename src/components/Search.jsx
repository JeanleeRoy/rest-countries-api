import '../assets/styles/components/search.scss'

const Search = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO
    }

    return ( 
        <form className="search" onSubmit={handleSubmit}>
            <button type="submit">
                <span className='icon icon-search'></span>
            </button>
            <input type="search" placeholder='Search for a country...' />
        </form>
     )
}
 
export default Search;