import axios from "axios"

const getMovies = async () => {
    console.log(axios.get('?s=day'))
    return (await axios.get('?s=day')).data
}

export default getMovies