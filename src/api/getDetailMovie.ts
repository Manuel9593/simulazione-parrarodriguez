import axios from "axios"

const getMovies = async (id: string | number) => {
    return (await axios.get(`?i=${id}&api_key=${process.env.OMDB_APIKEY}`)).data
}

export default getMovies