import { useLoaderData } from "react-router-dom"
import { Center } from "@chakra-ui/react"
import getMovies from "../api/getMovies"
import Header from "../components/Header"
import MovieList from "../components/MovieList"

export async function loader() {
    const movies = await getMovies();
    return { movies };
}

const Movies = () => {
    const { movies }: any = useLoaderData();
    console.log(movies)
    return (
        <>
            <Header />
            <Center>
                <MovieList movieList={movies.Search} />
            </Center>
        </>
    )
}

export default Movies