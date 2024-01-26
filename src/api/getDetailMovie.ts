import axios from "axios"

const getMovies = async (id: string | number) => {
    return (await axios.get(`?i=${id}`)).data
}

export default getMovies