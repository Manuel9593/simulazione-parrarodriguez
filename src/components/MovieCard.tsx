import { Card, CardBody, CardHeader,
    Heading, Image, Text,
    VStack, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Movie } from "../types";

type MovieCardProps = {
    movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <LinkBox>
            <Card>
                <Image src={movie.Poster} />
                <VStack>
                    <CardHeader>
                        <LinkOverlay href={`/movies/${movie.imdbID}`}>
                            <Heading as={'h2'} size={'md'}>{movie.Title}</Heading>
                        </LinkOverlay>
                    </CardHeader>
                    <CardBody>
                        <Text>{movie.Year} - {movie.Type}</Text>
                    </CardBody>
                </VStack>
            </Card>
        </LinkBox>
    );
};

export default MovieCard