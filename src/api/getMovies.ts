import { instance } from "./default"

const getMovies = async () => {
    return (await instance.get(`?s=day&apikey=${import.meta.env.VITE_OMBD_APIKEY}`)).data
}

export default getMovies