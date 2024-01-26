import { instance } from "./default"

const getDetailMovie = async (id: string | number) => {
    return (await instance.get(`?i=${id}&apikey=${import.meta.env.VITE_OMDB_APIKEY}`)).data
}

export default getDetailMovie