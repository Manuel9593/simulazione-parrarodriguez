import axios from "axios"

const getMovies = async () => {
    return (await axios.get(`?s=day&api_key=${process.env.OMDB_APIKEY}`)).data
}

export default getMovies