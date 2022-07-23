const apiUrl = 'https://restcountries.com/v3.1/'
const baseParams = 'name,flags,population,region,capital'

const handleUrl = (name, params = false) => {
    let url = apiUrl + (name === '' ? 'all' : `name/${name}`)
    if (params) url += `?fields=${baseParams}`
    return url
}

export default handleUrl;