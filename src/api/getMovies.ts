import { instance } from "./default"

const getMovies = async () => {
    return (await instance.get(`?s=day&apikey=${import.meta.env.VITE_OMDB_APIKEY}`)).data
}

export default getMovies