import { Wrap, WrapItem } from "@chakra-ui/react"
import MovieCard from "./MovieCard"
import { Movie } from "../types"

type MovieListProps = {
    movieList: Movie[]
}

const MovieList = ({movieList}: MovieListProps) => {
    return (
        <Wrap justify={'center'} p={4} m={2} spacing={'50px'}>
            {
                movieList.map((el: Movie) => {
                    return (
                        <WrapItem>
                            <MovieCard movie={el} />
                        </WrapItem>
                    )
                })
            }
        </Wrap>
    )
}

export default MovieList